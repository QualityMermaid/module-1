"use Strict"

import "./Main.css"
import HornedBeast from "../HornedBeast/HornedBeast"
import data from "../../data.json"

export default function Main({openModal}){
    
        return(
            <main>
                <div className="hornedBeast-main">                    
                    {data.map((beast, key)=>{
                        return(
                        <HornedBeast 
                            wholebeast={beast} 
                            key={beast._id} 
                            title={beast.title} 
                            image_url={beast.image_url}  
                            description={beast.description} 
                            openModal={openModal}/>
                            )
                        }
                    )}
                </div>
            </main>
        )

}
