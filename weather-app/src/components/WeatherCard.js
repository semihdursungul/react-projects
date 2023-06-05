import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >{name}</h2>



      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
          <span style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginLeft: '10px',
          }}>{Math.round(main.temp)}</span>
          <span style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginLeft: '10px',
          }}>°C</span>


        <p
          style={{
            fontSize: '20px',
            padding: '30px',
            fontWeight: 'bold',
          }}
        >
          {weather[0].description}
        </p>




      </div>
    </div>
  );
};

export default WeatherCard;
