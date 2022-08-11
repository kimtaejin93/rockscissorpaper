import React from 'react'

const Box = (props) => {
     return (
        <div className={`box ${props.judge}`}>
        <h1 className="center">{props.title}</h1>
        <img className="item-img" src ={props.choice&&props.choice.img}/>
        <h2 className="center">{props.judge}</h2>
        
    </div>
  )
}

export default Box