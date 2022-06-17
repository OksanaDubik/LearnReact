import React, {useEffect, useState} from "react";


export function Example(props) {

    const [messag, setMessage] = useState([])
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')

    const handleText = (ev) => {
        setValue(ev.target.value)
    }

    const handleAuthor = (ev) => {
        setAuthor(ev.target.value)
    }


    const handleMessage = () => {

        setMessage([...messag,value, author+", uigg itf retwaeay4gv"])
        setAuthor("")
        setValue("")
    }
    useEffect(() => {
console.log(author +', привет')

    }, [author] )


    return <>
        <ul> {messag.map(mes =>
            <li >{mes}</li>)}
        </ul>

        <input type='text' value={value} onChange={handleText}/>

        <input type='text' value={author} onChange={handleAuthor}/>
        <button  onClick={handleMessage}>нажать</button>
<button onClick={()=>setAuthor(author) }>xxxxx</button>
    </>
}

