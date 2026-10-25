import React ,{ useState } from 'react'
import '../assets/css/style.css'


const LearnInlineCSS = () => {

    const style = {
        container:{
            backgroundColor: 'red',
            height: '100px',
            width: '100px'
        },
        h2Text: {
            fontSize: '40px',
            color: '#00ff00',
        }
    }

  return (
    <>
    <style>
        {`
            .container{
                    background-color: #00ff00;
                    height: 100px;
                    width: 100px;
            }
        `}
    </style>
    <h1>Inline css</h1>
    <p style={{ fontSize: '20px',fontWeight: 600, color:'red' }}>Hello, this is a paragraph</p>
    
    <div style={style.container}>

    </div>
    <h2 style={style.h2Text}>HELLO WORLD</h2>
    <hr />
    <h1>Internal css</h1>
    <div className="container"></div>
    <hr />
    <h1>External CSS</h1>
    <div className="yellowbox">

    </div>
    <h2 className="yellowtext">Yellow Text</h2>
    
    </>
  )
}

export default LearnInlineCSS