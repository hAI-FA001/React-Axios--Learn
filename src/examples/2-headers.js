import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    console.log('fetch dad joke');
    try {
      // const resp = await axios.get(url)  // if don't provider header, get html
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json'
        }
      })
      console.log(data)
      setJoke(data.joke)
    } catch (error) {
      console.log(error)
      console.log(error.response)
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
