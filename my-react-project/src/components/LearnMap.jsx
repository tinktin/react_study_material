import React,{useState} from 'react'

const LearnMap = () => {
    const names = ['Rakesh','Ranjan','Srivastava','john','bob','doe']
  return (
    <>
    <h1>Map function</h1>

    <ul>
        {names.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
    </ul>
    
    </>
  )
}

export default LearnMap