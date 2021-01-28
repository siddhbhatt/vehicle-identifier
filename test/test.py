import requests
import json

url = 'http://127.0.0.1:2040/im_size'
my_img = {'image': open('test/car.PNG', 'rb')}

r = requests.post(url, files=my_img)
print(json.loads(r.text), r.status_code)