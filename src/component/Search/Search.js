import React, { useState } from 'react'
import "./Search.css"

export default function Search(data) {
    console.log(data)
    const [formData, setFormData] = useState({
        name:"",
        horns:"",
        keyword:"",
    });

    function handleBeastSearch(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    return (
        <div className='beastSearch-div'> 
            <form className='beastSearch-container'>
                <legend>Beast Search</legend>
                <label>Title:<input 
                typeof='search'
                onChange={handleBeastSearch}
                placeholder='Title of Beast'
                />
                </label>
                <label>Keyword:<input 
                typeof='search'
                onChange={handleBeastSearch}
                placeholder='Keyword of Beast'
                />
                </label>
            </form>
        </div>
    )
}
