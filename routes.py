from app import app
from flask import render_template

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/programmer/webdev")
def webdev():
    return render_template("programmer/webdev.html")

@app.route("/programmer/software")
def software():
    return render_template("programmer/software.html")

@app.route("/programmer/gamedev")
def gamedev():
    return render_template("programmer/gamedev.html")

@app.route("/programmer/datavisualization")
def datavisualization():
    return render_template("programmer/datavisualization.html")

@app.route("/programmer/java")
def java():
    return render_template("programmer/java.html")

@app.route("/educator/education")
def education():
    return render_template("educator/education.html")

@app.route("/projects/videoediting")
def videoediting():
    return render_template("projects/videoediting.html")

@app.route("/educator/lhs")
def lhs():
    return render_template("educator/lhs.html")
