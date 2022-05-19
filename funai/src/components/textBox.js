import React, { useState } from 'react';
import Output from "./output"



export default function TextBox() {

    // set up states
    const [ text, setText ] = useState('');
    const [ results, setResults ] = useState('')

    // handleInput Sets State.
    const handleInput = (event) => {
        const { target } = event
        const inputValue = target.value
        setText(inputValue)
    }

    // handleSubmit make sure there is some text in the text box then
    // calls for the data.
    // Not working yet!
    async function checkSubmit(event) {
        event.preventDefault();

        if (text.length === 0) {
            alert("Please add some text")
            return
        }
        console.log(text)
        const response = await fetch("/components/api/generate.js", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({prompt: text}),
        });
        const data = await response.json()
        console.log(data)
    }

  

    return (
        <div>
            <h1>fun with AI</h1>

            <textarea
            placeholder='Enter a prompt'
            value={text}
            name="text"
            type="text"
            onChange={handleInput}
            />

            <button onClick={checkSubmit}>Submit</button>
            <Output />
        </div>
    )
}