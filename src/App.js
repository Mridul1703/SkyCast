import { React, useState } from 'react'
import axios from 'axios';
import WeatherDetails from './components/WeatherDetails';
import weatherlogo from './components/weather.svg';

export const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});
  const [isClicked, setisClicked] = useState(false);

    const fetchAPI = (cityName) => {
      if(!cityName) return;
      const apiKey = 'b43fa81f2bd1a66ff807b613e602e7ad';
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
      axios
        .get(apiURL)
        .then((res) => {
          setData(res.data);
        });
    }

  const handleClick = () => {
    fetchAPI(city);
    setisClicked(true);
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  return (
    <>
  <div class='bg-slate-800'>
<nav class="bg-gray-700 border-gray-200">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={weatherlogo} class="h-8" alt="SkyCast Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SkyCast - AutoOps</span>
        </a>
    </div>
</nav>

    <br></br>

    <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        onChange={handleChange}
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Enter City" /> 
    </div>

    <br></br>

    <div class="v-screen flex items-center justify-center">
      <button type="button" onClick={handleClick} class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    <WeatherDetails data={data} showComponent={isClicked} isCity={city}/> 
   </div>
  </div> 
    </>
  )
}

export default App;