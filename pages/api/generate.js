import { Configuration, OpenAIApi } from 'openai';



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix =
    'Take the title below and write me a story with a beginning, climax and end with a surprising plot twist. Add names and descriptions of the characters. Please make sure to add a positive moral of the story. The tone of the story should be for children. Title:';

  const userInput = req.body.userInput;

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${userInput}\n`,
    temperature: 0.99,
    max_tokens: 550,
  });

  const basePromptOutput = baseCompletion.data.choices.pop().text;

  const generateImages = async (text) => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_DALLE_API_KEY,
    });

    const dalle = new OpenAIApi(configuration);

    const imageParameters = {
      prompt: `zendoodle coloring book style drawing of ${userInput} in black and white only, centered composition, white space and margin`,
      n: 10,
      size: '512x512',
    };

    const response = await dalle.createImage(imageParameters);

    const imageUrls = response.data.data.map((image) => image.url);

    return imageUrls;
  };

  const imageUrls = await generateImages(basePromptOutput);

  res.status(200).json({ output: basePromptOutput, imageUrls });
};



export default generateAction;


