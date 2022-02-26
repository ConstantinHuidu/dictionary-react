import React from 'react'

export default function SearchButton(props) {
    function handleSearchWord() {
        // let searchFor = props.input;
        let isFound = false;
        for (const word of props.words) {
            if (word === props.input) {
                isFound = true;
            }
        }
        isFound ?
        props.setMessage(`The word: ${props.input} is found in the dictionary`) :
        props.setMessage(`Can't find word: ${props.input} inside the dictionary`);
    }

    return (
        <>
            <button onClick={() => handleSearchWord()}>Search word</button>
            {/* <div>{props.message}</div> */}
        </>
    )
}
