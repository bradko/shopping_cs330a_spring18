import random, json
from flask import Flask, Response
import time

app = Flask(__name__)

@app.route('/getlist')
def anyname():
	res = Response(json.dumps({'number':random.randrange(100)}))
	#res.headers['access-Control-Allow-Origin'] = '*'
	res.headers['Content-type'] = 'application/json'
	return res

app.run(debug=True, port=5001)