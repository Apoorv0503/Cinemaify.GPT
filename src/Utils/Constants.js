export const UserAvatar="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer"+process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN="https://image.tmdb.org/t/p/w500";

//array to define the available set of languages that can be used across the application.
export const SUPPORTED_LANGUAGES=[
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" }
]


// gemini key
export const GEMINIAI_KEY=process.env.REACT_APP_GEMINIAI_KEY;

//gemini post url
export const geminiURL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=';
