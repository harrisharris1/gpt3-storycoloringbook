import { useState, useRef} from 'react';
import Images from './api/generateDalle'
import Navigation from './navigation';
import jsPDF from 'jspdf';
import React from 'react';









const MainContent = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
 

 
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
  
    console.log('Calling OpenAI...');
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output, imageUrls } = data;
    console.log('OpenAI replied...', output);
  
    setApiOutput(output);
    setImageUrls([...imageUrls]);
    setIsGenerating(false);
  };

  


  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const toggleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      if (selectedImages.length < 7) {
        setSelectedImages([...selectedImages, index]);
      }
    }
  };

  const generatePdf = () => {
    const imageElements = Array.from(document.querySelectorAll('.selected img'));
    const apiOutputElement = document.querySelector('.output');
  
    // Check if the elements exist before using them
    if (!apiOutputElement || !apiOutputElement.hasChildNodes()) {
      console.error('Error: API output is empty');
      return;
    }
    if (imageElements.length === 0) {
      console.error('Error: No images are selected');
      return;
    }
  
    // Hide all elements except for the images and api output
    document.querySelectorAll('*').forEach(el => {
      if (el !== apiOutputElement && !imageElements.includes(el)) {
        el.style.display = 'none';
      }
    });
  
    // Print the page and show all elements again
    window.print();
    document.querySelectorAll('*').forEach(el => el.style.display = '');
  };
  
 
  
  

  
  

  // const generatePdf = async () => {
  //   const pdfApiOutput = new jsPDF();
  //   const outputWidth = 100;
  //   const outputX = (pdfApiOutput.internal.pageSize.width - outputWidth) / 2;
  //   const outputY = 5;
  //   pdfApiOutput.setFontSize(12);
  //   pdfApiOutput.text(apiOutput, outputX, outputY, {  maxWidth: outputWidth });
  //   pdfApiOutput.save('apiContent.pdf');
  // }


  
  

  return (
    <div className="root">
      <div className="container">
        <Navigation/>
        <div className="header">
       
          <div className="header-subtitle">
            <h2>The perfect place for kids to unleash their creativity.</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea
            placeholder="Write a title for your story to go with it! For example: The nice shark who wanted friends."
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <button
              className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </button>
          </div>
          <div id="pdf-content">
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>{userInput}</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
          </div>
          
        </div>


        <button className="pdf-button" onClick={generatePdf}>
  Download story
</button>

{/* <button
  className="pdf-button"
  onClick={() => {
    generatePdf(imageRef, "Images");
    generatePdf(outputRef, "ApiOutput");
  }}
>
  Download story
</button> */}

      </div>
      <Images imageUrls={imageUrls} selectedImages={selectedImages} toggleImageSelection={toggleImageSelection} />
    </div>
  );
};

export default MainContent;
