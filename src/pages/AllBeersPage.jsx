
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

      function handleSearch(event) {
        fetchAllBeers(event.target.value)
      }
      async function fetchAllBeers(str = "") {
        try {
          const response = await axios.get(`${baseURL}/search?q=${str}`)
          setBeers(response.data)
        } catch (error) {
          console.error(error.message)
        }
      }
            
      return (
        <>
			<h2>All Beers</h2>
			<div>
				<h3>Search</h3>
				<input
					type="search"
					placeholder="You know the drill"
					onChange={handleSearch}
				/>
			</div>
			{beers.map((beer) => {
				return (
					<div key={beer._id}>
						<Link to={`/beers/${beer._id}`}>
							<p>{beer.name}</p>
						</Link>
					</div>
				)
			})}
		</>
	)
              }

export default AllBeersPage;
