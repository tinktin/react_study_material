import {useState,useMemo } from 'react'

const LearnUseMemo = () => {
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState(1000000);

  const increaseCount = () =>{
    if (count=== 10){
      setNumber(9999999999)
    }
    setCount(count + 1);
  }
  // const sumOfNumbers = ()=>{
  //   let sum = 0;
  //   for(let i=1; i<=number; i++){
  //     sum = sum + i;
  //   }
  //   return sum;
  // }
  const sumOfNumbers = useMemo(()=>{
      let sum = 0;
      for(let i=1; i<=number; i++){
        sum = sum + i;
      }
      return sum;
    },[number]);
  // console.log(`Sum of numbers from 1 to ${number}`,sumOfNumbers());
  console.log(`Sum of numbers from 1 to ${number}`,sumOfNumbers);

  return (
    <>  
    <h2>Count: {count}</h2>
    <button onClick={increaseCount}>Increase Count</button>
    
    
    </>
  )
}

export default LearnUseMemo