import React, {useEffect, useRef, useState} from "react";

const Child =(props)=>{

    return(

        <span>{ props.num }</span>
    )

}
const Button = (props)=>{
    return(
        <div className='button' onClick={props.onClick} style={{borderColor: 'red'}}>Click</div>
    )
}

export const Counter = (props)=>{
    const [num, setNum]=useState(11)
    const [count, setCount]= useState(0)
    const [name, setName]=useState(true)
    const [value, setValue]= useState('')
    const element = useRef(null)




    useEffect(()=>{

            console.log(name? "Петр": "Иван");


    }, [name]);
    useEffect(()=>{
        console.log(' like useEffect');

    });


    const updateCount = ()=>{
        setCount ((prevCount) => prevCount +1 )
        alert(count+2 + value)

    }
    const dateCount = ()=>{
        setNum((prevCount)=>prevCount *10)
    }

    const handleChange= (event)=>{
        setValue(event.target.value)

    }



   return <>

<div ref={element}> Refs </div>
       <h1 style={{color : 'red'}}>{value}</h1>
       <input type='text' value={ value } onChange={handleChange} />
       <span className='counter'>{count}</span>
       <button className='counter-button' onClick={updateCount}>Click!</button>
       <button className='name' onClick={()=>setName(!name) } name={name? {style: {borderColor: 'red'}} : {style:{borderColor : 'blue'}}} style={{borderColor: "red"}} >{ name? "Петр" : "Иван" }</button>
       <p>{ name? "Петр": "Иван"}</p>
       <hr/>
       <Child name = {num} style={{color : 'red'}} />{num}
       <Button onClick={dateCount} style={{color: "red"}}/>
   </>
}
