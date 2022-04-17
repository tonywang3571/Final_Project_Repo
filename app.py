from flask import Flask, render_template, url_for, redirect, request, jsonify, render_template_string


app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/airbnb/")
def airbnb():
    return render_template('airbnb.html')

@app.route("/zillow/")
def zillow():
    return render_template('zillow.html')

@app.route("/tableau/")
def tableau():
    return render_template('tableau.html')

# @app.route("/data/")
# def data():
#     return render_template('index.html')

@app.route("/test/")
def test():
    # import sys
    # sys.path.append('C:/Users/tonyw/OneDrive/Desktop/Washu_Bootcamp/Keys')
    # from keys import mapbox_key
    # API_KEY = mapbox_key
    
    # import pandas as pd
    # import plotly.express as px

    # us_cities = pd.read_csv("https://raw.githubusercontent.com/plotly/datasets/master/us-cities-top-1k.csv")

    # fig = px.scatter_mapbox(us_cities, lat="lat", lon="lon", hover_name="City", hover_data=["State", "Population"],
    #                         color_discrete_sequence=["fuchsia"], zoom=3, height=500)
    # fig.update_layout(mapbox_style="dark", mapbox_accesstoken=API_KEY)
    # fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})
    # fig.show()

            
    return render_template('test.html')

    # , render_template_string('''
    #             <div id="mapid" style="width: 100%; height: 100%;">
    #             <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    #             integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    #             crossorigin=""></script>
    

    #             <script type="text/javascript" src="../static/js/config.js"></script>

    #             <script type="text/javascript" src="../static/js/logic.js"></script>
    #             ''')



if __name__ == "__main__":
    app.run(debug=True)
