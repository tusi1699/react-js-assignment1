import React from "react";
function Card(props)
{
    return <div className="card1 p-4 shadow mx-auto w-50 mt-5">
        <h3 className="  text-center  mx-auto ">My Name is {props.name.name}<br/>
                                                My Age is {props.name.age}<br/>
                                                My Address  is{props.name.address}
                                                </h3>

    </div>
}
function CardApp(){
    const Userdetails ={
        name:"Trupti Pansuriya",
        age: 25,
        address:"rajkot"

    }
    return(
      <>
      <Card name={Userdetails}/>
      </>
    )
}
export default CardApp