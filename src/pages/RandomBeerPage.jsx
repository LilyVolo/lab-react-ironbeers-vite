import React from "react"
import axios from "axios"

import { useEffect, useState } from "react"


function RandomBeersPage() {
const apiRan ='https://ih-beers-api2.herokuapp.com/beers/random'
const [beer, setBeer] = useState(null)



async function fetchOne() {
    try {
    
        const res = await axios.get(`${apiRan}`)
        setBeer(res.data)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchOne()
}, [])


if (!beer) {
    return <div >Loading...</div>
}


return (
    <div>
        {console.log(beer, 'check')}
         <p>{beer.name}</p>
         <p>{beer.tagline}</p>
         <button onClick={fetchOne}>retch beer</button>
    </div>
)
}

export default RandomBeersPage;
