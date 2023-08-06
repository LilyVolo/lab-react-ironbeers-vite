import { Link } from "react-router-dom";


function HomePage() {
  
    return(
      <div className="hompageContainer">
       
        <div className="homePage">
        <Link to={`/beers`}> 
        <img src="./public/pivo.jpg" style={{ width: "8rem" }} alt="" />
        <div>All Beers</div>
        </Link>

        <Link to={`/random-beer`}> 
        <img src="./public/images.jpg" style={{ width: "8rem" }} alt="" />
        <div>Random beer</div>
        </Link>

        <Link to={`/new-beer`}> 
        <img src="./public/bokal.jpg" style={{ width: "8rem" }} alt="" />
        <div>New beer</div>
        </Link>

        </div>

      </div>
  

    )
    }
export default HomePage;
