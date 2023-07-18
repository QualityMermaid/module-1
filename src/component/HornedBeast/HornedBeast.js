"use Strict"

import { useState } from "react"
import "./HornedBeast.css"


export default function HornedBeast(props){
    const [love, setLove] = useState(0)
    
    function handleBeastLove(){
    console.log(love)
    setLove(love+1)
    }

    return(
        <div className="hornedBeast-div">
            <h2>{props.title} </h2>
            <img className="img" src={props.image_url} alt={props.title} onClick={handleBeastLove}></img>
            <p>{props.description}</p>
            <p>Has been loved {love} times</p>

        </div>
    )

}
