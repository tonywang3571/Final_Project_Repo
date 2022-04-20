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
    return render_template('test.html')

@app.route("/scott/")
def scott():
    return render_template('scott.html')


if __name__ == "__main__":
    app.run(debug=True)
