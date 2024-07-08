// import React, {useEffect} from "react"; 
// import {GEMINIAI_KEY} from "../Utils/Constants";
// import {geminiURL} from "../Utils/Constants";

// //custome hook to make reqyest
// const useGeminiAPI = (Query) => {

//  //data to be send to the gemini api
// const data = {
//  contents: [
//    {
//      parts: [
//        {
//          text: Query,
//        },
//      ],
//    },
//  ],
// };

// const fetchGeminiResponse=async()=>{
//     //actual reqiest to gemini api
// try {
//     const finalURL=geminiURL+GEMINIAI_KEY;

//     console.log("finalURL: ", finalURL);

//     const response = await fetch(finalURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
   
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
   
//     const result = await response.json();
//     console.log(result);
//    } catch (error) {
//     console.error("Error:", error);
//    }
// }

// useEffect(() => {
//     fetchGeminiResponse();
//   }, []);

//  }

// export default useGeminiAPI;