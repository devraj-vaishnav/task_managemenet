import React, { useEffect, useState } from 'react'

const UseEffect = () => {
   
    const [clicked, setClicked] = useState();
    useEffect(()=>{
        alert(clicked)
    })
  return (
    <div>
        <button onClick={()=>setClicked('dev1')}> dev1</button>
        <br/><hr/>
        <button onClick={()=>setClicked('dev2')}> dev2</button>
        <br/><hr/>
        <button onClick={()=>setClicked('dev3')}> dev3</button>
        <h1 >{clicked}</h1>
    </div>
  )
}

export default UseEffect