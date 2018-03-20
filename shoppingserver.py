import random, json
from flask import Flask, Response
import time

app = Flask(__name__)

# read json from file (GET)
@app.route('/getlist')
def anyname():
	pass

# write json to file (POST)
@app.route('/savelist')
def save():
	pass

app.run(debug=True, port=5001)