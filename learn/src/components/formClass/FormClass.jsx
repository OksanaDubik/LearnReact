import React, {useState} from "react";

import {InputClass} from "./InputClass";

import {ButtonClass} from "./ButtonClass";

export const FormClass = ()=> {

    const [name, setName] = useState("Click")
    const [value, setValue] = useState('')
    const [messages, setMessage] = useState([])
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setMessage([...messages, value])
        setValue('')
    }
    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    return <>
        <button onClick={() => setVisible(!visible)}>{visible ? "Спрятать" : "Распрятать"} </button>
        {visible && <ul>
            {messages.map(message => <li>{message}</li>)}
        </ul>}
        <InputClass change={handleChange} value={value}/>
        <ButtonClass name={name} click={handleClick}/>
    </>

}



