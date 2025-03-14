import { HfInference } from '@huggingface/inference';

// Initialize the Hugging Face Inference client
// Note: You'll need to add your Hugging Face API token as an environment variable
const hf = new HfInference(process.env.NEXT_PUBLIC_HF_API_TOKEN);

// The model we're using for facial emotion detection
const MODEL_ID = 'prithivMLmods/Facial-Emotion-Detection-SigLIP2';

/**
 * Detects facial emotions in an image
 * @param {string} imageBase64 - Base64 encoded image data
 * @returns {Promise<string>} - The detected emotion
 */
export async function detectEmotion(imageBase64) {
  try {
    // Remove the data URL prefix to get just the base64 data
    const base64Data = imageBase64.split(',')[1];
    
    // Convert base64 to binary
    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    // Use the Hugging Face Inference API to analyze the image
    const response = await hf.imageClassification({
      model: MODEL_ID,
      data: imageBuffer,
    });
    
    // Get the predicted emotion (assuming the model returns a label)
    if (response && response.length > 0) {
      // Return the emotion with the highest confidence
      return response[0].label;
    }
    
    return 'Unknown';
  } catch (error) {
    console.error('Error detecting emotion:', error);
    return 'Error detecting emotion';
  }
}

/**
 * Mocked function for local development if you don't have an API key yet
 * @returns {Promise<string>} - A random emotion
 */
export async function mockDetectEmotion() {
  const emotions = ['Happy', 'Sad', 'Angry', 'Surprised', 'Neutral', 'Fearful', 'Disgusted'];
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return emotions[Math.floor(Math.random() * emotions.length)];
} 