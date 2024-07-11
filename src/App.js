import './App.css';
import React, { useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className='main-content'>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { name: name }
        ]);
      }}>Add</button>

      <div class="row previews-container">
        {artists.map(artist => (
          <div className='preview-img col'>
            <img src={artist.name} className='view-img' />
          </div>
        ))}
      </div>
        

 
    </div>
  );
}
 
export default App;