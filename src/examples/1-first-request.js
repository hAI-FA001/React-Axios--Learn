import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const resp = await axios.get(url)
      console.log(resp)
      console.log(resp.data)
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  }

  useEffect(() => {
    console.log('first axios request');
    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
