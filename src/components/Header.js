import React, { useState } from 'react'
import './Header.css';

function Header(props) {
    const [inputText, setInputText] = useState("");

    function onClick(){
        props.onPress(inputText);
    }

    function handleChange(e){
        setInputText(e.target.value);
    }

  return (
    <div className="header_container">
        <input type="text" className="header_input" onChange={handleChange} placeholder="Enter Id"/>
        <button className="header_button" onClick={onClick}>Search</button>
    </div>
  )
}

export default Header