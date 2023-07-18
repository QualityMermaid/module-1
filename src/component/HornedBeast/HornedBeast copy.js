"use Strict"

import "./HornedBeast.css"
import data from "../../data.json"

export default function HornedBeast(props){
    return(
        <div className="hornedBeast-div">
            <h2>{props.title} </h2>
            <img className="img" src={props.imgUrl} alt={props.title}></img>
            <p>{props.description}</p>
        </div>
    )

}
