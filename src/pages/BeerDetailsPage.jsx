
import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


function BeerDetailsPage() {

	const {beerId} = useParams()
    const [beer, setBeer] = useState(null)
    const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'



	async function fetchOne() {
		try {
		
			const res = await axios.get(`${baseURL}/${beerId}`)
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
        </div>
       
    )
}

export default BeerDetailsPage;
