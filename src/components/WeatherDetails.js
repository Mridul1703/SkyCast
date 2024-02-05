import React from 'react'
import weatherlogo from './weather.svg';

export const WeatherDetails = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const date = today. getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const currentDate = date + " " + month + ", " + year;

    if(props.showComponent && props.isCity) {
        return (
          <>
<div class="min-h-screen flex items-center justify-center">
<div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
						<div class="font-bold text-xl">{props.isCity}</div>
						<div class="text-sm text-gray-500">{currentDate}</div>
						<div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <img src={weatherlogo} class="h-12"></img>
						</div>
						<div class="flex flex-row items-center justify-center mt-6">
							<div class="font-medium text-6xl">{(props.data?.main?.temp-273.15).toFixed(2)}°C</div>
							<div class="flex flex-col items-center ml-6">
								<div class="mt-1">
									<span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
									<span class="text-sm font-light text-gray-500">{(props.data?.main?.temp-273.15+5).toFixed(2)}°C</span>
								</div> 
								<div>
									<span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
									<span class="text-sm font-light text-gray-500">{(props.data?.main?.temp-273.15-5).toFixed(2)}°C</span>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-between mt-6">
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Wind</div>
								<div class="text-sm text-gray-500">{props.data?.wind?.speed}k/h</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Humidity</div>
								<div class="text-sm text-gray-500">{props.data?.main?.humidity}%</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Visibility</div>
								<div class="text-sm text-gray-500">10km</div>
							</div>
						</div>
					</div>
</div>  
          </>
        )
    } else {
      return (
<div class="min-h-screen flex items-center justify-center">
<div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
						<div class="font-bold text-xl">Location</div>
						<div class="text-sm text-gray-500">{currentDate}</div>
						<div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src={weatherlogo} class="h-12"></img>
						</div>
						<div class="flex flex-row items-center justify-center mt-6">
							<div class="font-medium text-6xl">°C</div>
							<div class="flex flex-col items-center ml-6">
								<div>Cloudy</div>
								<div class="mt-1">
									<span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
									<span class="text-sm font-light text-gray-500">°C</span>
								</div>
								<div>
									<span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
									<span class="text-sm font-light text-gray-500">°C</span>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-between mt-6">
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Wind</div>
								<div class="text-sm text-gray-500">k/h</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Humidity</div>
								<div class="text-sm text-gray-500">%</div>
							</div>
							<div class="flex flex-col items-center">
								<div class="font-medium text-sm">Visibility</div>
								<div class="text-sm text-gray-500">km</div>
							</div>
						</div>
					</div>
</div>
      )
    }
}

export default WeatherDetails;