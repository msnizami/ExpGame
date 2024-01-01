# -*- coding: utf-8 -*-
import json
import numpy as np
import pandas as pd
import tornado

from .basisRequestHandler import BasisRequestHandler
from models import compute_counterfactual_of_model


class PredictNewShubNoHandler(BasisRequestHandler):
    def initialize(self, model, datamgr):
        self.model = model
        self.datamgr = datamgr

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "Content-Type, Accept")
        self.set_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def options(self):
        self.set_status(204)
        self.finish()

    def prepare(self):
        try:
            self.args = None
            if self.request.headers["Content-Type"] == "application/json":
                self.args = tornado.escape.json_decode(self.request.body)
        except Exception as ex:
            pass

    def __compute_counterfactual(self, x, blockcount, uf):
        # print('in cf compute', x)
        return compute_counterfactual_of_model(x, blockcount, uf, self.model["model"]) #updated according to ufce

    # def __compute_counterfactual_control(self, x):
    #     # print('in cf compute', x)
    #     return compute_counterfactual_of_model_control(x, self.model["model"]) #updated according to ufce

    def __parse_request_body(self):
        if self.args is None:
            self.send_custom_error(400, "Missing or invalid body")
            raise Exception()

        # Get user identifier
        user_id = self.args["userId"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'userId'")
            raise Exception()

        # Get number of current shubs
        # cur_num_shubs = self.args["numShubs"] # need to change to yes or no old value of test nstance that we get from predictor
        cur_pred = self.args["cur_pred"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'cur_pred'")
            raise Exception()

        # Get trial count
        trial_count = self.args["trialCount"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'trialCount'")
            raise Exception()

        # Get block count
        block_count = self.args["blockCount"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'blockCount'")
            raise Exception()

        # Get input variables
        input_vars = self.args["inputVars"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'userId'")
            raise Exception()
        if not isinstance(input_vars, dict):
            self.send_custom_error(400, "Invalid data type of 'inputVars'")
            raise Exception()

        return user_id, cur_pred, trial_count, block_count, input_vars

    def post(self):
        # Get all arguments
        try:
            user_id, cur_pred, trial_count, block_count, input_vars = self.__parse_request_body()
        except:
            return

        # Ask database which group the user is in (control vs. experimental group)
        user_info = self.datamgr.get_user_by_userId(user_id)
        if user_info is None:
            self.send_custom_error(400, "Invalid userId")
            return
        control_group = user_info["controlGroup"] # initially we go for explanation group

        # Compute a prediction using the model
        x = np.array([input_vars['Var1'], input_vars['Var2'], input_vars['Var3'], input_vars['Var4'], input_vars['Var5']], dtype=float).reshape(1, -1)
        # print('test x in shub', x)
        x = pd.DataFrame(x, columns=['Var1', 'Var2', 'Var3', 'Var4', 'Var5'])
        new_pred = self.model["model"].predict(x)

        # Compute new number of shubs
        # SNnew = int(np.floor(cur_num_shubs * pred))    # new number = old number * GR prediction)
        print("input:")
        print([input_vars["Var1"], input_vars["Var2"], input_vars["Var3"], input_vars["Var4"], input_vars["Var5"]])
        # print("pred:", new_pred)

        #SNnew = int(cur_num_shubs + np.round((((5-(-5))*(pred - 0))/(2 - 0)) + (-5)))
        # REMEMBER: minimal / maximal growth rates in training data:
        #GRneg.min=0.1; GRpos.max=1.9
        # diff = np.round((((10-(-10))*(pred - 0.1))/(1.9 - 0.1)) + (-10))
        # SNnew = int(cur_num_shubs + np.round((((10-(-10))*(pred - 0.1))/(1.9 - 0.1)) + (-10)))
        # print("diff:")
        # print(diff)
        # print("SNnew:")
        # print(SNnew)
        # # never have less than 2 Shubs!
        # if SNnew < 2:
        #     SNnew = 2

        # print("Value of x:",x)


        # Compute a closest counterfactual explanation if the user is in the experimental group
        x_cf1, cf_dice = self.__compute_counterfactual(x, block_count, input_vars)  #updated
        x_cf1 = x_cf1.reset_index(drop=True)
        x_cf1 = x_cf1.applymap(lambda k: int(k) if isinstance(k, (float, int)) else k)
        cf_dice = cf_dice.reset_index(drop=True)
        cf_dice = cf_dice.applymap(lambda i: int(i) if isinstance(i, (float, int)) else i)
        x = x.applymap(lambda j: int(j) if isinstance(j, (float, int)) else j)
        
        # print(x_cf1)
        

        # dice log
        log_data_dice = {
            #"prediction": pred,
            "oldpred": cur_pred,
            "newpred": new_pred.item(),
            "trialCount": trial_count,
            "blockCount": block_count,
            "inputVars": {
                "Var1": input_vars["Var1"],
                "Var2": input_vars["Var2"],
                "Var3": input_vars["Var3"],
                "Var4": input_vars["Var4"],
                "Var5": input_vars["Var5"]
            }
        }
        #if control_group is False:
        if cf_dice is not None:
            # print('in log data,', x_cf1)
            cf_dice = cf_dice.to_dict()
            # print('x_cf1')
            # print(x_cf1)

            log_data_dice["counterfactualCountVars"] =  {
                    "Var1": cf_dice['Var1'][0],
                    "Var2": cf_dice['Var2'][0],
                    "Var3": cf_dice['Var3'][0],
                    "Var4": cf_dice['Var4'][0],
                    "Var5": cf_dice['Var5'][0]
                }
        # user_id = 111
        # print(log_data)
        if self.datamgr.log_user_stuff_dice(user_id, json.dumps(log_data_dice)) is False:
            print("Sending an error")
            self.send_custom_error(500, "Internal server errorzzzzzzzzzz")
            return

        # ufce Log everything!
        log_data = {
            #"prediction": pred,
            "oldpred": cur_pred,
            "newpred": new_pred.item(),
            "trialCount": trial_count,
            "blockCount": block_count,
            "inputVars": {
                "Var1": input_vars["Var1"],
                "Var2": input_vars["Var2"],
                "Var3": input_vars["Var3"],
                "Var4": input_vars["Var4"],
                "Var5": input_vars["Var5"]
            }
        }
        #if control_group is False:
        if x_cf1 is not None:
            # print('in log data,', x_cf1)
            x_cf1 = x_cf1.to_dict()
            # print('x_cf1')
            # print(x_cf1)

            log_data["counterfactualCountVars"] =  {
                    "Var1": x_cf1['Var1'][0],
                    "Var2": x_cf1['Var2'][0],
                    "Var3": x_cf1['Var3'][0],
                    "Var4": x_cf1['Var4'][0],
                    "Var5": x_cf1['Var5'][0]
                }
        # user_id = 111
        # print(log_data)
        if self.datamgr.log_user_stuff(user_id, json.dumps(log_data)) is False:
            print("Sending an error")
            self.send_custom_error(500, "Internal server errorzzzzzzzzzz")
            return

        # Send result back to client
        results = {
            "cur_pred": new_pred.item() #SNnew
            # "new_pred": new_pred.item()
        }
        if x_cf1 is not None:
            results["counterfactualCountVars"] =  {
                "Var1": x_cf1['Var1'][0],
                "Var2": x_cf1['Var2'][0],
                "Var3": x_cf1['Var3'][0],
                "Var4": x_cf1['Var4'][0],
                "Var5": x_cf1['Var5'][0]
            }
            # need to change the difference according to our approach
            x = x.to_dict()
            # print('x')
            # print(x)
            
            results["diffCountVars"] = {
                "Var1": x_cf1["Var1"][0] - x["Var1"][0],
                "Var2": x_cf1["Var2"][0] - x["Var2"][0],
                "Var3": x_cf1["Var3"][0] - x["Var3"][0],
                "Var4": x_cf1["Var4"][0] - x["Var4"][0],
                "Var5": x_cf1["Var5"][0] - x["Var5"][0]
                 }
        # print('results:', results)
        self.write(json.dumps(results))

        self.finish()
