import React, { useState, useRef } from 'react';

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '' && !image) return;
    
    onSendMessage({
      text: message,
      image: imagePreview
    });
    
    setMessage('');
    setImage(null);
    setImagePreview('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-300 dark:border-gray-700 pt-4">
      {imagePreview && (
        <div className="relative mb-2 inline-block">
          <img 
            src={imagePreview} 
            alt="Preview" 
            className="h-20 rounded-md object-cover"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      )}
      <div className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-l-md focus:outline-none"
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          📷
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
  );
} 