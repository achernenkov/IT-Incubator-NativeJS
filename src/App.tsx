import React from 'react';
import './App.css';
import Lesson1 from './lessons/lesson1/lesson1';
// import './lessons/lesson2/lesson2'
import Lesson3 from './lessons/lesson3/Lesson3';
import Lesson4 from './lessons/lesson4/Lesson4';

function App() {
  return (
    <div className="container">
      {/*<Lesson1 />*/}
      <Lesson3 />
      <div style={{borderTop: '1px solid red', width: '100%', height: '5px', marginTop: '10px'}}/>
      <Lesson4 />
    </div>
  );
}

export default App;
