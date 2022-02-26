import React from 'react'

export default function AddButton(props) {

  function handleAddWord() {
    let word = props.input;
    props.setWords([...props.words, word]);
  } 

  return (
    <>
      <button onClick={() => handleAddWord()}>Add Word</button>
    </>
  )
}
