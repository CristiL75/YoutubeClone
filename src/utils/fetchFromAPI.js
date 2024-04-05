import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const headers = {
  'X-RapidAPI-Key': '8a87c66b76msha1637cb483a684bp163c53jsnee4f5f9be6d3',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
};


export const fetchFromAPI = async (endpoint) => {
  try {

    const response = await axios.get(`${BASE_URL}/${endpoint}`, { headers });


    return response.data;
  } catch (error) {

    console.error('Error fetching data:', error);
    throw error; 
  }
};
