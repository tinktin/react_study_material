import {useState} from 'react'

const LearnUseState = () => {
    const [num,setNum] = useState(5)
    console.log(num);
    const handleNum = () =>{
        setNum(10)
    }

    const [stockPrice,setStockPrice] = useState({stock:'Apple',price:1000})
    console.log(stockPrice)


    const updateStockPrice = ()=>{
        setStockPrice({...stockPrice,price:2000})
    }
  


  return (
    <>
    <h2>Number: {num}</h2>
    <button onClick={handleNum}>Click here</button>
    <hr />
    <h2>{stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick={updateStockPrice}>Click here</button>
    
    </>
  )
}

export default LearnUseState