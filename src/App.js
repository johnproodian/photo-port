import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;


// thru 20.3.3; onto 20.3.4
