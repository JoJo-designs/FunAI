import React, { useState } from 'react';
import Output from "./output"


export default function TextBox() {

    // set up states
    const [text, setText] = useState('');

    // handleInput Sets State.
    const handleInput = (event) => {
        const { target } = event
        const inputValue = target.value
        setText(inputValue)
    }

    // handleSubmit make sure there is some text in the text box.
    const checkSubmit = (event) => {
        event.preventDefault();

        if (text.length === 0) {
            alert("Please add some text")
            return
        }
        console.log(text)
    }

    // 

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