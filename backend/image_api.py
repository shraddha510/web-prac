import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Path to your image folder
IMAGE_FOLDER = 'uploads/images'

@app.route('/')
def home():
    return "Welcome to the Image API!"

@app.route('/api/images')
def get_images():
    images = []
    # List all files in the IMAGE_FOLDER and filter for image files
    for filename in os.listdir(IMAGE_FOLDER):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            images.append({'url': f'/images/{filename}'})
    return jsonify(images)

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
