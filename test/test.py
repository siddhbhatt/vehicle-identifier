import requests
import json

url = 'http://127.0.0.1:2040/anpr'
my_img = {'image': open('test/skoda.jpeg', 'rb')}
#my_img = {'image': open('test/bmw.jpeconda g', 'rb')}
#my_img = {'image': open('IMG_CAR_DETECTION.PNG', 'rb')}

r = requests.post(url, files=my_img)
print(json.loads(r.text), r.status_code)