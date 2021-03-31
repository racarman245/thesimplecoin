import requests
import json

coinListUrl = "https://coincheckup.com/data/prod/201801190648/coins.json"
coinList = requests.get(coinListUrl).json()
coinList = coinList[586:]

coinDataUrl = "https://coincheckup.com/data/prod/201801190648/assets/%s.json"
#coinData = {}

for c in coinList:
   coinId = c["id"]
   print(coinId)
   coinData[coinId] = requests.get(coinDataUrl % coinId).json()

with open('coinData.json', 'w') as fp:
    json.dump(coinData, fp)