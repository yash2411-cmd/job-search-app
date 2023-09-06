import { useState, useEffect } from "react";
import axios from 'axios';
import {RAPID_API_KEY} from './@env';


const rapidapikey = RAPID_API_KEY; 

const useFetch = (endpoint,query) => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState(null);
    
    
const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`, // changeable endpoint
    headers: {
      'X-RapidAPI-Key': rapidapikey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },

    params: {...query},
  };

  // fetching data iin response and handling the data
  const fetchData = async () =>{
    setisLoading(true);

    try {
        const response = await axios.request(options);
        setdata(response.data.data);
        setisLoading(false); 
    } catch (error) {
        seterror(error);
        alert('there is an error');
    }finally{
        setisLoading(false);
    }

  }

  useEffect(() => {
    fetchData();

  },[]);

    // refetching the data
  const refetch = () =>{
    setisLoading(true);
    fetchData();
  }
  
  return {data, isLoading, error, refetch};

}

export default useFetch;