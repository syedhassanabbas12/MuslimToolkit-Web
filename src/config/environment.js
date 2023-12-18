const STAGE = window.process?.env?.REACT_APP_STAGE?.trim();

let BASE_URL =
  window.process?.env?.[
    "REACT_APP_API_ENDPOINT_" + (STAGE?.toUpperCase() || "DEV")
  ];

const GOOGLE_MAP_TOKEN =
  window.process?.env?.[
    "REACT_APP_GOOGLE_MAP_TOKEN_" + (STAGE?.toUpperCase() || "DEV")
  ];

const REACT_APP_API_ENDPOINT_ALQURAN = "http://api.alquran.cloud/v1";
const REACT_APP_API_ENDPOINT_QURAN = "https://api.quran.com/api/v4";
BASE_URL = REACT_APP_API_ENDPOINT_QURAN;

export { BASE_URL, GOOGLE_MAP_TOKEN };
