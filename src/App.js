import './App.css';
import React from 'react';
import backgroundImage from './image/Backgorund_img.jpg';
import TitleBar from './component/TitleBar.js';
import Page from './component/Page.js';
import Shelf from './component/Shelf.js';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: '100vw',
      height: '100vh'
    }}>
      <div style={{padding: '20px'}}></div>
      <TitleBar/>
      <div class="rowDiv">
        <Page/>
        <Shelf/>
      </div>
    </div>
  );
}

export default App;
