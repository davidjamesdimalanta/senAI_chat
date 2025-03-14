#!/bin/bash

# Start the Python API server
echo "Starting Python API server..."
source venv/bin/activate
cd "$(dirname "$0")"
python app/api/emotion_server.py &
PYTHON_PID=$!

# Start the Next.js app
echo "Starting Next.js app..."
npm run dev &
NEXTJS_PID=$!

# Function to handle script termination
cleanup() {
  echo "Shutting down servers..."
  kill $PYTHON_PID
  kill $NEXTJS_PID
  exit 0
}

# Register the cleanup function for script termination
trap cleanup INT TERM

# Keep the script running
echo "Both servers are running. Press Ctrl+C to stop."
wait 