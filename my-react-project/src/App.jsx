
import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/CounterApp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChildA from "./components/ChildA"
import LearnUseRef from "./components/LearnUseRef"
import { createContext,useState  } from "react"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCSS from "./components/LearnInlineCSS"
import LearnLoadingImages from "./components/LearnLoadingImages"
import LearnForms from "./components/LearnForms"


const StockContext = createContext()
const UserContext = createContext()


function App() {
  let price = 200
  let stock = 'Tesla'


  const [user,setUser] = useState({name:'Rakesh',isLoggedIn: 'Yes'})
 


  const getstock = (data)=>{
    console.log(data)
  }

  // context api -> create,provider and consumer

  return (
    <>
    <h1>App Component</h1>
    {/* <HelloWorld /> */}
    {/* <LearnReact /> */}
    {/* <LearnJSX /> */}
    {/* <LearnProps stock="Tesla" price={price} /> */}
    {/* <LearnEvent /> */}
    {/* <LearnLiftingStateUp getStock={getstock} /> */}
    {/* <LearnUseState /> */}
    {/* <CounterApp /> */}
    {/* <LearnUseEffect /> */}
    {/* <LearnUseMemo /> */}
    <StockContext.Provider value={{stock,price}}>
      <UserContext.Provider value={{user,setUser}}>
    <ChildA  />
    </UserContext.Provider>

    </StockContext.Provider>
    {/* <LearnUseRef /> */}
    {/* <LearnCustomHooks /> */}
    {/* <LearnConditionalRendering /> */}
    {/* <LearnMap /> */}
    {/* <LearnInlineCSS /> */}
    {/* <LearnLoadingImages /> */}
    <LearnForms />
      
    </>
  )
}

export default App
export {StockContext,UserContext}



