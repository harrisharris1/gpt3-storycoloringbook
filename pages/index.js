import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Configuration, OpenAIApi } from "openai";


const Home = () => {
const [userInput, setUserInput] = useState('');
const [apiOutput, setApiOutput] = useState('')
const [dalleOutput, setDalleOutput] = useState([]);
const [isGenerating, setIsGenerating] = useState(false)
const [isGeneratingImages, setIsGeneratingImages] = useState(false);

const callGenerateAndDallEAPI = async () => {
    setIsGenerating(true);
    setIsGeneratingImages(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
    setApiOutput(`${output.text}`);
  
    const dalleResponse = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiOutput }),
    })

    const dalleData = await dalleResponse.json();
    const { dallEoutput } = dalleData;
    console.log("DALL-E API replied...", dallEoutput );
    setDalleOutput(dallEoutput);
    
    setIsGenerating(false);
    setIsGeneratingImages(false);
}
  
  
  const onUserChangedText = (event) => {
      setUserInput(event.target.value);
    };
  

// const callGenerateEndpoint = async () => {
//   setIsGenerating(true);
  
//   console.log("Calling OpenAI...")
//   const response = await fetch('/api/generate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userInput }),
//   });

//   const data = await response.json();
//   const { output } = data;
//   console.log("OpenAI replied...", output.text)

//   setApiOutput(`${output.text}`);
//   setIsGenerating(false);

  
// }

// const callDallEAPI = async ()=>{
//   console.log("Calling DALL-E API...");
//  const response = await fetch('/api/generate',{
//   method:'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({apiOutput})
//  })

//  const data =await response.json();
//  const {output}= data;
//  console.log("dall-e replied", output);
//  setDalleOutput(output)
// }

// const onUserChangedText = (event) => {
//     setUserInput(event.target.value);
//   };


  return (
    <div className="root">
      <Head>
        <title>Whimsical Writings</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Whimsical Writing</h1> 
          </div>
          <div className='sub-header'>
          <p>We help kids be the author of their own stories!</p>
          </div>
          <div className="header-subtitle">
            <h2>The perfect place for kids to unleash their creativity.</h2>
          </div>
        </div>
        <div className="prompt-container">
      
          <textarea 
            placeholder="Write down a title for your story and a genre to go with it!
            For example:
            Title: The dragon who fell in love with a dolphin.
             Genre: Fantasy."
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
           />
          <div className="prompt-buttons">
          <a
    className={`generate-button ${isGenerating || isGeneratingImages ? 'loading' : ''}`} // update class to include styles for loading state
    onClick={callGenerateAndDallEAPI} // trigger onClick event for the combined function
  >
          {/* <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  > */}
    <div className="generate">
    {isGenerating || isGeneratingImages ? <span class="loader"></span> : <p>Generate</p>}
    </div>
  </a>
          </div>
          {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
{dalleOutput.length > 0 &&(
  <div className='dalle-container'>
    <h3>Generated Images</h3>
    <div className="dalle-output-images">
{dalleOutput.map(image => (
  <img src={image.url} alt=""/>
))}
    </div>
    </div>
    
)}
        </div>
      </div>
    </div>
  );
};

export default Home;
