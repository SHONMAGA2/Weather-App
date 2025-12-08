from flask import Flask, render_template, request
import requests

app = Flask(__name__, static_folder='../Frontend', static_url_path='/static')


API_KEY = "e5a07dc691135b64e7af7ddfc3189dbb"  # your OpenWeatherMap key

@app.route('/', methods=['GET', 'POST'])
def home():
    city_name = "Cape Town"  # default city
    if request.method == 'POST':
        city_name = request.form.get('city', 'Cape Town')

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric"
    response = requests.get(url).json()

    # Handle errors if city not found
    if response.get('cod') != 200:
        weather = {
            'city': city_name,
            'temperature': "N/A",
            'description': "City not found",
            'icon': ""
        }
    else:
        weather = {
            'city': city_name,
            'temperature': response['main']['temp'],
            'description': response['weather'][0]['description'].title(),
            'icon': response['weather'][0]['icon']
        }

    return render_template('../templates/index.html', weather=weather)

if __name__ == '__main__':
    app.run(debug=True)
