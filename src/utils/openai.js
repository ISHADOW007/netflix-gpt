import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY,dangerouslyAllowBrowser: true, // Use the API key directly
});

export default openai;
