import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).
      then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temperature at  " + city + "\n" + Math.round(celcius) + "'c");

      }
      ).catch(err => console.log(err))
    setCity("");
  }

  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Weather App</h4>
            <form onSubmit={submitHandler}>
              <input type="text" name='city' value={city} onChange={changeHandler} /><br /> <br />
              <input type='submit' value='Get Temperature' />
            </form><br /><br />
            <div>
              {result}
            </div>
          </div>

        </div>

      </center>
    </div>
  );
}

export default App;
