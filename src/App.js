import './App.css';
import React, { useState } from 'react';
import AddButton from './AddButton';
import SearchButton from './SearchButton';
import Message from './Message';
import DisplayDictionary from './DisplayDictionary';

function App() {
  const [input, setInput] = useState([]);
  const [words, setWords] = useState([]);
  const [message, setMessage] = useState([]);

  function changeInput(e) {
    setInput(e.target.value);
  }

  return (
    <>
    <h1>Dictionary</h1>
    <input className="input" type="text" id="word" onChange={(e) => changeInput(e)}></input>
    <AddButton words={words} setWords={setWords} input={input}/>
    <SearchButton message={message} setMessage={setMessage} words={words} input={input}/>
    <br></br>
    <DisplayDictionary words={words} />
    <Message message={message}/>
    </>

  );
}

export default App;
