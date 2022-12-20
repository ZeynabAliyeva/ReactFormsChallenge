import React, { useState, useEffect } from "react";

function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [info,setInfo] = useState({
    name:"",
    email:"",
    password:""
  })

    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo({
        ...info,
        [name]:value
    })
  }

  return (
    <>
      <button className="btnLgn" onClick={()=> setIsOpen(prevState => !prevState)}>Log in</button>
     {!isOpen&&<h1>{info.name}</h1>}
        {isOpen &&  <form action="/action_page.php">
        <label htmlFor="fname">User Name:</label>
        <input type="text" id="fname" name="name"onChange={handleChange} value={info.name}/>
        <br />
        <label htmlFor="email">User Email:</label>
        <input type="email" id="lname" name="email" onChange={handleChange} value={info.email}/>
        <br/>
        <label htmlFor="pass">User Password:</label>
        <input type="password" htmlFor="user" id="pass" value={info.password} name="password" onChange={handleChange}/>
        <br />
        <input type="submit" defaultValue="Submit" onClick={()=> setIsOpen(prevState => !prevState)}/>
      </form>}
    </>
  );
}

export default Form;
