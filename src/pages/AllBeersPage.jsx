
import { useState, useEffect } from "react"

import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'


function AllBeersPage() {

    const [beers, setBeers] = useState([])
    const [error, setError] = React.useState(null);

   useEffect(() => {
        // invalid url will trigger an 404 error
        axios.get(baseURL).then((response) => {
          setBeers(response.data);
        }).catch(error => {
          setError(error);
        });
      }, []);

      if (!beers) {return <div className="loading">Loading...</div>}
    return (

            
	
		<div>
			{beers.map((el) => {
          
				return (
                   
					<article key={el._id}>
						<Link to={`/beers/${el._id}`}>
                            <img src={el.image_url} style={{ width: "5rem" }} alt="" />
							<h2>{el.name}</h2>
                            <h5>{el.tagline}</h5>
                            <h5>{el.contributed_by}</h5>
						</Link>
					</article>
         
				)
			})}
		</div>
	)

       
    



}

export default AllBeersPage;
