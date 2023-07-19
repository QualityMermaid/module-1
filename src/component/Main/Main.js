"use Strict"

import "./Main.css"
import HornedBeast from "../HornedBeast/HornedBeast"
import data from "../../data.json"
// import { useState } from "react"

export default function Main(){

        return(
            <main>
                <div className="hornedBeast-main">                    
                    {data.map((beast)=>
                    <HornedBeast title={beast.title} image_url={beast.image_url}  description={beast.description} />
                    )}
                </div>
            </main>
        )

}
