import React,{useState} from "react"
const Test = ()=>{
    const [ count , setCount ] = useState(0);
    console.log(count);
    console.log(setCount);
    console.log(useState('Hello'))
    const handleClick = () =>{
        setCount(count+1)
    }
     const handleClickdec = () =>{
        setCount(count-1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClickdec}>-</button>
        </div>
    )
}
export default Test