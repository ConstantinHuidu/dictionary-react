import React from 'react'

export default function DisplayDictionary(props) {

    return (
        <>
            <div className="dict-container">
            <label >Words inside dictionary: {props.words.length}</label>
            <p className="wordslist">{props.words.map(word => word + ' ')}</p>
            </div>
        </>
    )
}
