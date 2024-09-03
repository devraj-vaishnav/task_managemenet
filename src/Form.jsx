import React, { useState } from 'react'

const Form = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
    const headleValue = (e) => {
        console.log(e.target.value)
        setName(e.target.value);

    }
    const headleEmail = (e) => {
      console.log(e.target.value)
      setEmail(e.target.value);
  }
  const   headleSubmit = (e) => {
    e.preventDefault();
  
}
  return (
    <div>
      <form onSubmit={headleSubmit }>
        <h2>Form</h2>
        Name:
        <input type='text' value={name}  onChange={headleValue } />
        <br />
        Email:
        <input type='text' value={email}  onChange={headleEmail } />
        <br />
        <button type='submit' > Submit</button>
        </form>
    </div>
  )
}

export default Form