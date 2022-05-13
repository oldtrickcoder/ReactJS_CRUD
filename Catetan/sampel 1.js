// import React from 'react';
// import './App.css';

// SAMPLE INI DIGUNAKAN UNTUK MEMPERLIHATKAN CARA 
// DATA BINDING DI REACTJS

function App() {
 
  const title="welcome to the new blog";
  const likes=50;
  const link="https://google.com"
  return (
    <div className="App">
<div className="content">
  <h1>{ title }</h1>
  <p>Liked {likes} times</p>

  <p>{10}</p>
  <p>{"Hello Ninjas !"}</p>
  <p>{[3,4,5,7,8,2,3]}</p>
  <p>{Math.random()*10}</p>
<a href={link} target="blank">Site </a>


</div>
    </div>
  );
}

export default App;
