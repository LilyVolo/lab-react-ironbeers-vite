import { Link, Outlet } from "react-router-dom";
function Navbar() {
    return(
        <>
        <nav className="navBar">
           <Link to={`/`} className="navLink"> 
        <img src="./public/70083.png" alt=""  style={{ width: "3rem" }}/>
        <div>Home</div>
        </Link>
        </nav>
    <Outlet/>
        
        </>
    )
}

export default Navbar;
