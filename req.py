import json
import logging
import os
import signal
import time
from tuya_connector import (
    TuyaOpenAPI,
    TuyaOpenPulsar,
    TuyaCloudPulsarTopic,
    TUYA_LOGGER,
)

ACCESS_ID = 'markpnvva535s7wh4yuh'
ACCESS_KEY = 'c40f38372cb24cd58594d8273d82c67d'
USER_ID = 'az1683658824222RajEK'
API_ENDPOINT = "https://openapi.tuyaus.com"
MQ_ENDPOINT = "wss://mqe.tuyaus.com:8285"
USERNAME = 'marcelo@fttech.com.br'
PASSWORD = 'dcba4321'
DEVICE_ID = 'eb49e9ca19346f0a3abbzd'

TUYA_LOGGER.setLevel(logging.DEBUG)

openapi = TuyaOpenAPI(API_ENDPOINT, ACCESS_ID, ACCESS_KEY)

# Função de tratamento do sinal de interrupção (Ctrl+C)
def handle_interrupt(signal, frame):
    print("Programa interrompido")
    openapi.disconnect()
    exit(0)

# Configurar o tratamento do sinal de interrupção
signal.signal(signal.SIGINT, handle_interrupt)

while True:
    openapi.connect()

    commands = {"type": "hls"}
    request = openapi.post(f'/v1.0/devices/{DEVICE_ID}/stream/actions/allocate', commands)
    link = request["result"]["url"]

    # Apagar o arquivo JSON anterior, se existir!
    if os.path.exists("link.json"):
        os.remove("link.json")

    # Salvar o link em um novo arquivo JSON
    data = {"link": link}
    with open("link.json", "w") as file:
        json.dump(data, file)

    time.sleep(180)
