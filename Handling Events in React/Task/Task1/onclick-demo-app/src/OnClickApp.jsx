import React,{useState,useEffect} from 'react'

export default function OnClickApp() {
    const[text,setText]=useState("Not Clicked");

    const handleClick =()=>{
        setText("Clicked");
    };
  return (
    <div>
      
      <p className="mb-2 text-lg font-semibold m-5">{text}</p>
      <button
        onClick={handleClick}
        className="btn btn-lg bg-dark text-white ms-5">
        Click Me
      </button>
    
  
    </div>
  )
}
