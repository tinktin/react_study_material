

const LearnLiftingStateUp = (props) => {
    const handleClick = ()=>{
        let stock = 'Tesla'
        props.getStock(stock)
    }
  return (
    <> 

    <h1>Lifting state up</h1> 
    <button onClick={handleClick}>Click here</button>
    
    
    
    </>
  )
}

export default LearnLiftingStateUp