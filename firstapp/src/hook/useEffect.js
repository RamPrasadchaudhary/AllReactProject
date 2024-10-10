import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means it runs once on mount

  return <div>{data ? <p>{data.message}</p> : <p>Loading...</p>}</div>;
}
export default   UseEffect