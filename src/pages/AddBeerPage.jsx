
import { useState, useEffect } from "react"

import React from "react"
import axios from "axios"

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

import { useNavigate } from "react-router-dom"

function AddBeerPage() {

const navigate = useNavigate()


const [dataform, setDataForm] = useState({

    name:'',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level:0,
    contributed_by:  '',
} 
)

function handleChange(event) {
    setDataForm({ ...dataform, [event.target.id]: event.target.value })
}



function handleSubmit(e) {
e.preventDefault()
console.log(e.target)
axios.post(`${baseURL}/new`,dataform).then(() => {
    navigate("/beers")
})
}


    return (
        <>
        
        
        <form  onSubmit={handleSubmit}>
            <div><label htmlFor="name"></label>
            <input type="text" id="name"
                        value={dataform.name}
                        onChange={handleChange}/></div>
            
            <div><label htmlFor="tagline"></label>
            <input type="text" id="tagline"
                        value={dataform.tagline} 
                        onChange={handleChange}/></div>

            <div><label htmlFor="description"></label>
            <input type="text"id="description"
                        value={dataform.description} 
                        onChange={handleChange} /></div>
            

            <div><label htmlFor="first_brewed"></label>
            <input type="text" id="first_brewed"
                        value={dataform.first_brewed} 
                        onChange={handleChange}/></div>

            <div><label htmlFor="brewers_tips"></label>
            <input type="text" id="brewers_tips"
                        value={dataform.brewers_tips} 
                        onChange={handleChange}/></div>

            <div><label htmlFor="attenuation_level"></label>
            <input type="number" id="attenuation_level"
                        value={dataform.attenuation_level} 
                        onChange={handleChange}/></div>

            <div><label htmlFor="contributed_by"></label>
            <input type="text"id="contributed_by"
                        value={dataform.contributed_by} 
                        onChange={handleChange}/></div>



            <button > Submit</button>
        </form>
        
        </>
    )
}

export default AddBeerPage;
