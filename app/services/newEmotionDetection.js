/**
 * New emotion detection service that communicates with our Python API
 * which uses the transformers library directly via the emoDet.py script
 */

// The URL of our Flask API server
const API_URL = 'http://localhost:5001/detect-emotion';

/**
 * Detects facial emotions in an image by calling our Python API
 * @param {string} imageBase64 - Base64 encoded image data
 * @returns {Promise<string>} - The detected emotion
 */
export async function detectEmotion(imageBase64) {
  try {
    // Call the Python API with the image data
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Check if we have a valid emotion result
    if (data.emotion) {
      return data.emotion;
    }
    
    return 'Unknown';
  } catch (error) {
    console.error('Error detecting emotion:', error);
    return 'Error detecting emotion';
  }
}

/**
 * Mocked function for development if the API server is not running
 * @returns {Promise<string>} - A random emotion
 */
export async function mockDetectEmotion() {
  const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Neutral', 'Fearful', 'Disgusted'];
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return emotions[Math.floor(Math.random() * emotions.length)];
} 