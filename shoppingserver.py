from flask import Flask, Response, request, jsonify
import json

app = Flask(__name__)

# write json to text file (POST)
@app.route('/savelist', methods=['POST'])
def savelist():
	f = open("shopList.txt", "w")
	content = str(request.json)
	f.write(content)
	f.close()
	return jsonify(content)

# read json from text file and return it (GET)
@app.route('/getlist', methods=['GET'])
def getlist():
	text = ""
	try:
		f = open("shopList.txt", "r")
		for line in f:
			text += line
		text = text.replace("'", '"')
		text = text.replace('False', '"False"')
		text = text.replace('True', '"True"')
	except:
		f = open("shopList.txt", "a")
	return jsonify(text)	

if __name__ == "__main__":
	app.run(debug=True, port=5001)