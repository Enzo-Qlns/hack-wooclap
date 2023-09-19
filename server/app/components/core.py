#!/usr/bin/env python

import datetime
import math
import random
import time
import requests


def readFileFrom(path=None):
    if None != path:
        return open(path, 'r').readlines()

def get_id_by_questionName(questionName, WOOCLAP_ID, TOKEN):
    BEARER = f"bearer {TOKEN}"

    RESPONSE = requests.get(f"https://app.wooclap.com/api/events/{WOOCLAP_ID}", headers={ "authorization": BEARER }).json()
    for response in RESPONSE["questions"]:
        try:
            if (questionName == response["title"]):
                return response["_id"]
        except:
            continue

def generate_token():
    presentDate = datetime.datetime.now()
    unix_timestamp = datetime.datetime.timestamp(presentDate)*1000
    return f"z{math.floor(random.random() * random.random() * unix_timestamp)}"


def starter(TIMING = 0):
    lines = readFileFrom("ascii.starter")
    print("".join(lines))
    time.sleep(TIMING)
