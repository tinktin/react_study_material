

const LearnEvent = () => {
    const handleClick = ()=>{
        console.log('button clicked')
    }
    const handleClickAgain = (param)=>{
        console.log(param)

    }
  return (
    <>
    <button onClick={handleClick}>Click here</button>
    <br />
    <button onClick={()=>handleClickAgain("clicked again")}>Click again</button>
    
    </>
  )
}

export default LearnEvent