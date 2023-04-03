
import { useState, useEffect } from 'react';
import React from 'react';







const Images = ({ imageUrls }) => {
  const [selectedImages, setSelectedImages] = useState([]);


  const handleImageClick = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    } else if (selectedImages.length < 7) {
      setSelectedImages([...selectedImages, imageUrl]);
    } else {
      alert('You can select a maximum of 7 images.');
    }
  };



  return (
    <div 
    className="image-container">
      {imageUrls.map((url, index) => (
        <div
       
          key={index}
          className={`image ${selectedImages.includes(url) ? 'selected' : ''}`}
          onClick={() => handleImageClick(url)}
        >
          <img 
          src={url} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;