"use Strict"

import "./Main.css"
import HornedBeast from "../HornedBeast/HornedBeast"
import data from "../../data.json"
// import { useState } from "react"

export default function Main(){
    const beastArr = data.map(function(beast){
        return console.log(beast)

    })
        // let beastArr = []
    // for (let i = 0; i <= data.length; i++){
    //     beastArr.push(data[i])
    // }


        return(
            <main>
                <div className="hornedBeast-main">
                    <HornedBeast title={beastArr[0].title} image_url={beastArr[0].image_url}  description={beastArr[0].description} keyword={beastArr[0].keyword} horns={beastArr[0].horns} />

                    {/* <HornedBeast title={beastArr[0].title} image_url={beastArr[0].image_url}  description={beastArr[0].description} keyword={beastArr[0].keyword} horns={beastArr[0].horns} />
                    <HornedBeast title={beastArr[1].title} image_url={beastArr[1].image_url}  description={beastArr[1].description} keyword={beastArr[1].keyword} horns={beastArr[1].horns}/>
                    <HornedBeast title={beastArr[2].title} image_url={beastArr[2].image_url}  description={beastArr[2].description} keyword={beastArr[2].keyword} horns={beastArr[2].horns}/>
                    <HornedBeast title={beastArr[3].title} image_url={beastArr[3].image_url}  description={beastArr[3].description} keyword={beastArr[3].keyword} horns={beastArr[3].horns}/>
                    <HornedBeast title={beastArr[4].title} image_url={beastArr[4].image_url}  description={beastArr[4].description} keyword={beastArr[4].keyword} horns={beastArr[4].horns}/>
                    <HornedBeast title={beastArr[5].title} image_url={beastArr[5].image_url}  description={beastArr[5].description} keyword={beastArr[5].keyword} horns={beastArr[5].horns}/>
                    <HornedBeast title={beastArr[6].title} image_url={beastArr[6].image_url}  description={beastArr[6].description} keyword={beastArr[6].keyword} horns={beastArr[6].horns}/>
                    <HornedBeast title={beastArr[7].title} image_url={beastArr[7].image_url}  description={beastArr[7].description} keyword={beastArr[7].keyword} horns={beastArr[7].horns}/>
                    <HornedBeast title={beastArr[8].title} image_url={beastArr[8].image_url}  description={beastArr[8].description} keyword={beastArr[8].keyword} horns={beastArr[8].horns}/>
                    <HornedBeast title={beastArr[9].title} image_url={beastArr[9].image_url}  description={beastArr[9].description} keyword={beastArr[9].keyword} horns={beastArr[9].horns}/>
                    <HornedBeast title={beastArr[10].title} image_url={beastArr[10].image_url}  description={beastArr[10].description} keyword={beastArr[10].keyword} horns={beastArr[10].horns}/>
                    <HornedBeast title={beastArr[11].title} image_url={beastArr[11].image_url}  description={beastArr[11].description} keyword={beastArr[11].keyword} horns={beastArr[11].horns}/>
                    <HornedBeast title={beastArr[12].title} image_url={beastArr[12].image_url}  description={beastArr[12].description} keyword={beastArr[12].keyword} horns={beastArr[12].horns}/>
                    <HornedBeast title={beastArr[13].title} image_url={beastArr[13].image_url}  description={beastArr[13].description} keyword={beastArr[13].keyword} horns={beastArr[13].horns}/>
                    <HornedBeast title={beastArr[14].title} image_url={beastArr[14].image_url}  description={beastArr[14].description} keyword={beastArr[14].keyword} horns={beastArr[14].horns}/>
                    <HornedBeast title={beastArr[15].title} image_url={beastArr[15].image_url}  description={beastArr[15].description} keyword={beastArr[15].keyword} horns={beastArr[15].horns}/>
                    <HornedBeast title={beastArr[16].title} image_url={beastArr[16].image_url}  description={beastArr[16].description} keyword={beastArr[16].keyword} horns={beastArr[16].horns}/>
                    <HornedBeast title={beastArr[17].title} image_url={beastArr[17].image_url}  description={beastArr[17].description} keyword={beastArr[17].keyword} horns={beastArr[17].horns}/>
                    <HornedBeast title={beastArr[18].title} image_url={beastArr[18].image_url}  description={beastArr[18].description} keyword={beastArr[18].keyword} horns={beastArr[18].horns}/>
                    <HornedBeast title={beastArr[19].title} image_url={beastArr[19].image_url}  description={beastArr[19].description} keyword={beastArr[19].keyword} horns={beastArr[19].horns}/> */}
                    
                </div>
            </main>
        )
        

}
