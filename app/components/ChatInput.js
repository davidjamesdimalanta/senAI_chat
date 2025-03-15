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
    <form onSubmit={handleSubmit} className="border-t border-neutral-light-grey dark:border-neutral-grey pt-4">
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
            className="absolute -top-2 -right-2 bg-secondary-meta-blue text-primary-white rounded-full w-5 h-5 flex items-center justify-center"
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
          className="flex-1 py-2 px-4 bg-neutral-light-grey dark:bg-neutral-dark-grey text-primary-black dark:text-primary-white rounded-l-md focus:outline-none"
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="p-2 bg-neutral-grey dark:bg-neutral-dark-grey text-primary-white hover:bg-neutral-dark-grey dark:hover:bg-neutral-grey"
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
          className="p-2 bg-primary-royal text-primary-white rounded-r-md hover:opacity-90 focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
  );
} 