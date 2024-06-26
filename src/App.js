import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// Using dynamic import to load node-fetch

// const url = 'https://url.com/';

// async function fetchData() {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Data received:', data);
//     } catch (error) {
//         console.error('Failed to fetch data:', error.message);
//     }
// }


function App() {
  // const [responseCount, setResponseCount] = useState(undefined);

  // const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    // event.preventDefaults()
    setSubmitted(!submitted);
  };  

  const content = submitted ? (
    <div>
      <p>Amazing</p>
      <button type='button' onClick={handleSubmit}>Go Back</button>
    </div>
  ) : (
    <form>
      <p>Easiest way to buy something!</p>
      <div>
        <label>Name</label>
        <br/>
        <input placeholder='Name...' />
      </div>
      <br/>
      <div>
        <label>Last Name</label>
        <br/>
        <input placeholder='Email...' />
      </div>
      <br />
      <button type='button' onClick={handleSubmit}>Submit</button>
    </form>
  );

  return (
    <div className="App">
    <div className='form'>
      {content}
    </div>
    </div>
  );
}

export default App;
