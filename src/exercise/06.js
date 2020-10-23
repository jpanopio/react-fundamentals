// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements[0].value;
    onSubmitUsername(username);
  };

  const inputRef = useRef(null);
  const handleSubmitWithRef = (event) => {
    event.preventDefault();
    const username = inputRef.current.value;
    onSubmitUsername(username);
  };

  const [errorMessage, setSErrorMessage] = useState(null);
  const handleChange = (event) => {
    const currentValue = event.target.value;
    const isValid = currentValue === currentValue.toLowerCase();

    if (!isValid) {
      setSErrorMessage('Username must be lower case');
    } else {
      setSErrorMessage(null);
    }
  };

  const [inputValue, setInputValue] = useState('');
  const handleChangeControlled = (event) => {
    event.preventDefault();
    const currentValue = inputRef.current.value;
    setInputValue(currentValue.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmitWithRef}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeControlled}
          id="username-input"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
      {errorMessage && (
        <span>{errorMessage}</span>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
