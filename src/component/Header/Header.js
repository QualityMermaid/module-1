"use Strict"

import "./Header.css"
import dragon from "../audio/dragon-roar-38093.mp3"

// let audio = new Audio("../audio/dragon-roar-38093.mp3")
let audio = new Audio(dragon)


export default function Header(){
    function playAudio(){
    console.log("header clicked")
        audio.play()
    }
    
    return(
        <header>
            <button className="beastButton" onClick={playAudio}> <h1 > Beast World</h1></button>
        </header>
    )
}
