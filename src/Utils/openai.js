// import OpenAI from 'openai';
// import {OPENAI_KEY} from "./Constants"

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY, // This is the default and can be omitted

//   //since we have our API key in frontend part, and making the request from the client side. This is making our app more vulnerabe as our code is 
//   //exposed to the client side. It is recommended to make request from server side (backend) and store key there in .env.

//   //but to make it work from frontend, use below option
//   dangerouslyAllowBrowser: true,  
// });

// export default openai;