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

@app.route("/team/")
def team():
    return render_template('team.html')

@app.route("/description_of_calcs/")
def description_of_calcs():
    return render_template('description_of_calcs.html')

if __name__ == "__main__":
    app.run(debug=True)
