# -*- coding: utf-8 -*-
import pandas as pd
import json
import uuid
import random

from .basisRequestHandler import BasisRequestHandler


class GameStartHandler(BasisRequestHandler):
    def initialize(self, datamgr):
        self.datamgr = datamgr

    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "Content-Type, Accept")
        self.set_header("Access-Control-Allow-Methods", "POST, OPTIONS")

    def options(self):
        self.set_status(204)
        self.finish()

    def __generate_unique_identifier(self):
        return uuid.uuid4().hex

    def post(self):
        # Generate new uuid
        user_id = self.__generate_unique_identifier()

        # Randomly assign user to control or experimental group
        control_group = bool(random.getrandbits(1))

        # Random test instance to load
        x_test = pd.read_csv('modelData/data/X_2test.csv')

        # Add it to the database
        if self.datamgr.add_new_user(user_id, control_group) is False:
            self.send_custom_error(500, "Internal server error")
        else:
            # Send it back to the client
            self.set_header("Content-Type", "application/json")
            self.write(json.dumps({"userId": user_id, "controlGroup": control_group, "test_instance":x_test[3:4].values.tolist()})) #"test_instance":x_test[:1].values
            self.finish()
