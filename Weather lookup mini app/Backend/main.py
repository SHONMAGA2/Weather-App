from flask import Flask, render_template,request
import requests

app = Flask(__name__)


@app.route('/')
API_KEY="e5a07dc691135b64e7af7ddfc3189dbb"



def home():
    city_name="Cape Town"
    if request.method == 'POST':
        city_name = request.form.get['city','Cape Town']
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric"
        response = requests.get(url).json()
        if response['cod'] == 200:
            weather = {
                'city': city_name,
                'temperature': response['main']['temp'],
                'description': response['weather'][0]['description'].title(),
                'icon': response['weather'][0]['icon']
            }
            return render_template('index.html', weather=weather)

if __name__ == '__main__':
    app.run(debug=True)
