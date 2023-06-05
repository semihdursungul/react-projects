import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location);
    setLocation('');
  };


  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
    >
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: '300px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
