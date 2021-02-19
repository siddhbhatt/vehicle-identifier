import requests
import json

url = 'http://192.168.0.188:2040/anpr'
my_img = {'image': open('test/car.PNG', 'rb')}
# my_img = {'image': open('test/skoda.jpeg', 'rb')}
# my_img = {'image': open('test/bmw.jpeg', 'rb')}
# my_img = {'image': open('IMG_CAR_DETECTION.PNG', 'rb')}

r = requests.post(url, files=my_img)
print(json.loads(r.text), r.status_code)