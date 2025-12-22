import React, {useEffect, useState} from 'react'
const UseEffect = () => {
 const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect called");
    },[count,value])
      return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default UseEffect
