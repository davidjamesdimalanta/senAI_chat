# Facial Emotion Detection Chat

This is a Next.js application that provides a chat interface for facial emotion detection using the [Facial-Emotion-Detection-SigLIP2](https://huggingface.co/prithivMLmods/Facial-Emotion-Detection-SigLIP2) model from Hugging Face.

## Features

- Chat interface
- Upload images to detect emotions in faces
- Dark/light mode support
- Real-time emotion analysis

## Getting Started

First, clone the repository and install the dependencies:

```bash
# Install Node.js dependencies
npm install
```

### Setting up the Python Environment

The application uses a Python backend with the transformers library to directly interact with the facial emotion detection model. To set up the Python environment:

```bash
# Create a Python virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install flask flask-cors transformers torch pillow opencv-python
```

### Running the Application

You can start both the Next.js frontend and Python backend together:

```bash
# Make sure the script is executable
chmod +x start.sh

# Run both servers with one command
./start.sh
```

Or start them separately:

```bash
# Start the Python API server in one terminal
source venv/bin/activate
python app/api/emotion_server.py

# Start the Next.js app in another terminal
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using the Chat Interface

1. Type a message in the input field
2. Click the camera icon to upload an image containing a face
3. Submit your message
4. The AI will analyze the image and respond with the detected emotion

## About the Model

The [Facial-Emotion-Detection-SigLIP2](https://huggingface.co/prithivMLmods/Facial-Emotion-Detection-SigLIP2) model is designed to detect emotions in facial images. It can recognize the following emotions:

- Happy
- Sad
- Angry
- Surprised
- Neutral
- Fearful
- Disgusted

## Implementation Details

This application uses:

- Next.js for the frontend framework
- Python Flask API with the transformers library for direct model inference
- The emoDet.py script to handle facial emotion detection
- Tailwind CSS for styling

## Notes for Development

- The application currently uses a mock emotion detection function for local development
- To use the real Hugging Face model, ensure you've set up your API token

## License

MIT
