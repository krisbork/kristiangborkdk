import React from 'react';
import './App.css';

const url = "https://www.linkedin.com/in/kristiangbork/"
function App() {
  return (
    <div>
      <h1 onClick={() => window.open(url)}>
        kristian gaardsted bork
      </h1>
    </div>
  );
}

export default App;
