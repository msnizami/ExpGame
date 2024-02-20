# -*- coding: utf-8 -*-
import tornado
import json

from .basisRequestHandler import BasisRequestHandler


class LogHelpHandler(BasisRequestHandler):
    def initialize(self, datamgr):
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

    def __parse_request_body(self):
        if self.args is None:
            self.send_custom_error(400, "Missing or invalid body")
            raise Exception()

        # Get user identifier
        user_id = self.args["userId"]
        if user_id is None:
            self.send_custom_error(400, "Missing field 'userId'")
            raise Exception()
        
        # Get help count
        helpCount = self.args["helpCount"]
        if helpCount is None:
            self.send_custom_error(400, "Missing field 'helpCounter'")
            raise Exception()

        # Get trial count
        planetNo = self.args["planetNo"]
        if planetNo is None:
            self.send_custom_error(400, "Missing field 'planetNo'")
            raise Exception()

        # # Get true number of shubs
        # n_shubs = self.args["shubNo"]
        # get user health value
        shub_health = self.args["shub_health"]
        if shub_health is None:
            self.send_custom_error(400, "Missing field 'shub_health'")
            raise Exception()

        return user_id, helpCount, shub_health, planetNo

    def post(self):
        # Parse data
        try:
            user_id, helpCount, shub_health, planetNo = self.__parse_request_body()
        except:
            return

        # Log data
        log_data = {
            "helpCount": helpCount,
            "planetNo": planetNo,
            "shub_health": shub_health
        }

        if self.datamgr.log_user_help(user_id, json.dumps(log_data)) is False:
            self.send_custom_error(500, "Internal server error")
        else:
            self.finish()
