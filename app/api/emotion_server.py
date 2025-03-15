from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import numpy as np
import cv2
import sys
import os
from PIL import Image
import io

# Add the parent directory to the path so we can import the emoDet module
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from services.emoDet import emotion_classification

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/detect-emotion', methods=['POST', 'HEAD'])
def detect_emotion():
    # Return empty response for HEAD requests
    if request.method == 'HEAD':
        return ''
        
    try:
        # Get the base64 image from the request
        data = request.json
        image_data = data.get('image', '')
        
        # Remove the data URL prefix if present
        if ',' in image_data:
            image_data = image_data.split(',')[1]
        
        # Add debugging logs
        print("Received image data, length:", len(image_data) if image_data else 0)
        
        # Decode the base64 image
        try:
            image_bytes = base64.b64decode(image_data)
            print("Successfully decoded base64 data")
        except Exception as e:
            print("Base64 decoding error:", str(e))
            return jsonify({'error': 'Invalid image encoding'}), 400
        
        # Convert to an image that can be processed
        try:
            image = Image.open(io.BytesIO(image_bytes))
            print("Successfully opened image, format:", image.format, "size:", image.size)
        except Exception as e:
            print("Image opening error:", str(e))
            return jsonify({'error': 'Could not open image'}), 400
        
        # Convert PIL Image to numpy array for emotion_classification
        image_np = np.array(image)
        print("Converted to numpy array, shape:", image_np.shape)
        
        # Call the emotion_classification function
        results = emotion_classification(image_np)
        print("Emotion classification results:", results)
        
        # Find the emotion with the highest confidence
        top_emotion = max(results.items(), key=lambda x: x[1])
        
        return jsonify({
            'emotion': top_emotion[0],
            'confidence': top_emotion[1],
            'all_emotions': results
        })
    
    except Exception as e:
        import traceback
        print("ERROR:", str(e))
        print(traceback.format_exc())
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)