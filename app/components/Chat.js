import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { detectEmotion, mockDetectEmotion } from '../services/newEmotionDetection';

export default function Chat() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I can detect emotions in facial images. Send me a message with a photo to analyze.", 
      isUser: false 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [isApiRunning, setIsApiRunning] = useState(false);

  // Check if the Python API is running
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('http://localhost:5001/detect-emotion', {
          method: 'HEAD',
        });
        setIsApiRunning(response.ok);
      } catch (error) {
        console.log('Python API server is not running. Using mock data instead.');
        setIsApiRunning(false);
      }
    };
    
    checkApiStatus();
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (newMessage) => {
    // Add user message to chat
    const userMessageId = Date.now();
    setMessages(prevMessages => [
      ...prevMessages,
      { id: userMessageId, ...newMessage, isUser: true }
    ]);

    // If there's an image, process it for emotion detection
    if (newMessage.image) {
      setIsLoading(true);
      try {
        // Use the real API if it's running, otherwise use the mock
        const emotion = isApiRunning ? 
          await detectEmotion(newMessage.image) : 
          await mockDetectEmotion();
        
        // Add AI response with detected emotion
        setMessages(prevMessages => [
          ...prevMessages,
          { 
            id: Date.now(), 
            text: `I've analyzed your image and detected the emotion: ${emotion}${!isApiRunning ? ' (using mock data)' : ''}`, 
            emotion,
            isUser: false 
          }
        ]);
      } catch (error) {
        console.error("Error detecting emotion:", error);
        setMessages(prevMessages => [
          ...prevMessages,
          { 
            id: Date.now(), 
            text: "Sorry, I couldn't analyze the emotion in that image. Please try another one.", 
            isUser: false 
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Simple text response if no image
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { 
            id: Date.now(), 
            text: "If you'd like me to analyze emotions, please send a photo with a face.", 
            isUser: false 
          }
        ]);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex-1 overflow-y-auto">
        {!isApiRunning && (
          <div className="mb-4 p-3 bg-secondary-sky-blue dark:bg-secondary-dark-denim text-secondary-dark-denim dark:text-secondary-sky-blue rounded-md">
            <p className="text-sm">
              ⚠️ Python API server is not running. Using mock emotion detection data instead.
              Run the server with: <code className="font-mono bg-neutral-light-grey dark:bg-neutral-dark-grey p-1 rounded">python app/api/emotion_server.py</code> from the project root.
            </p>
          </div>
        )}
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} isUser={message.isUser} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-neutral-light-grey dark:bg-neutral-dark-grey py-3 px-4 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-neutral-grey animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-grey animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-neutral-grey animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
} 