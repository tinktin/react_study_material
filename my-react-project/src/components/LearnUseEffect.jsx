import {useState,useEffect} from 'react'

const LearnUseEffect = () => {
    const [count,setCount] = useState(0)
    const [randomNum,setRandomNum] = useState(0)
    const increaseCount =()=>{
        setCount(count + 1)
    }
    const generateRandomNum = ()=>{
        const randomNum = Math.floor(Math.random() * 100);
        setRandomNum(randomNum)

    }
    useEffect(()=>{
        // the logic goes here
        console.log('useeffect is called');

        // clean up function
        return ()=>{
            console.log('Cleanup function is called');
        }
    },[count])
  return (
   <>
   <h1>Count:{count}</h1>
   <button onClick={increaseCount}>Increase Count</button>
   <hr />
   <h1>Random Number: {randomNum}</h1>
   <button onClick={generateRandomNum}>Generate Number</button>
   
   
   
   </>
  )
}

export default LearnUseEffect