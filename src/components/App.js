import React, { useEffect, useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  console.log(colors)
  const[quote,setquote]=useState({content: "",author: ""})
  useEffect(()=>{
    fetch("https://api.quotable.io/random").then(el=>el.json()).then(el=>{setquote(el)})
  },[])
  return (
      <div id="main">
        <div id="wrapper">
          <div className="quote-text">{quote.content}</div>
          <div className="quote-author">{quote.author}</div>
          <button id="new-quote" onClick={()=>fetch("https://api.quotable.io/random").then(el=>el.json()).then(el=>{setquote(el)})}>quote</button>
        </div>
      </div>
    );
};

export default App;
