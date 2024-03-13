import React, { useState , useEffect} from 'react';
import Data from './Data';
import './plan.css';
import { GoSearch } from "react-icons/go";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

function Suggest() {
  const [budget, setBudget] = useState(500);
  const [searchResults, setSearchResults] = useState([{
    id: 1,
    budget: 500,
    country: "India",
    place: ["Mumbai", "Delhi", "Agra", "Goa, Jaipur", "Bangalore", "Rajasthan", "Gujrat"],
    Hotel: { name: "Taj Mahal", costPerNight: 250 },
    stays: "3 nights 2 days",
    Flights: "Indira Gandhi International Airport"
  }]);
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);

  const fetchWeatherData = async (city) => {
    const apiKey = "26809974dffde6716c02bd9e92bee0ad";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    try {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const handleSearch = () => {
    const filteredResults = Data.filter(item => item.budget <= budget);
    setSearchResults(filteredResults);
  };

  const handleCountryWeather = async (country) => {
    if (selectedCountry && selectedCountry === country) {
      setIsWeatherVisible(false);
      setSelectedCountry(null);
      setWeatherData([]);
    } else {
      const places = country.place;
      const weatherData = await Promise.all(places.map(place => fetchWeatherData(place)));
      setWeatherData(weatherData.filter(data => data !== null));
      setSelectedCountry(country);
      setIsWeatherVisible(true);
    }
  };


  const handleRatingChange = (country, rating) => {
    const updatedResults = searchResults.map(item => {
      if (item === country) {
        return { ...item, rating: rating };
      }
      return item;
    });
    setSearchResults(updatedResults);
  };


  const renderStars = (country) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(country, i)}
          style={{ color: country.rating >= i ? "gold" : "grey", cursor: "pointer" }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };



  return (
    <>
      <div className="plans">
        <div className="plan-headings">
          <h2>Travel Plans</h2>
          <h3>We suggest destinations according to your budget.</h3>
          <h3>Starting from $500!</h3>
        </div>
        <div className="search">
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
          />
          <button onClick={handleSearch}><GoSearch /></button>
        </div>
        <br></br>
        <hr></hr>
        <hr></hr>
        <div className='plan-container'>
          {searchResults
            .sort((a, b) => a.country.localeCompare(b.country))
            .map(item => (
              <div key={item.id}>
                <h3>{item.country}</h3>
                <p className='places'>Places: {item.place.join(', ')}</p>
                <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
                <p>Stays: {item.stays}</p>
                <p>Flights: {item.Flights}</p>

                <div className='rating'>
                  Rating: {renderStars(item)}
                </div>
                
                <button className='weather-btn' onClick={() => handleCountryWeather(item)}>Show Weather</button>
                <div className="social-share">
                  <FacebookShareButton url={window.location.href} quote={`Check out this amazing destination: ${item.country}`} >
                    Share on Facebook
                  </FacebookShareButton>
                  <TwitterShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
                    Share on Twitter
                  </TwitterShareButton>
                  <WhatsappShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
                    Share on Whatsapp
                  </WhatsappShareButton>
                </div>

                <hr></hr>
                <hr></hr>
                {selectedCountry === item && isWeatherVisible && weatherData.map((weather, index) => (
                  <div key={index}>
                    <h3>{weather.name}</h3>
                    {weather.main && (
                      <>
                        <p>Current Temperature: {weather.main.temp}°C</p>
                        <p>Feels Like: {weather.main.feels_like}°C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                      </>
                    )}
                    {weather.weather && weather.weather.length > 0 && (
                      <p>Description: {weather.weather[0].description}</p>
                    )}
                  </div>
                ))}
                
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Suggest;




