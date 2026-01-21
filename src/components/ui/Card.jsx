import { NavLink } from "react-router-dom"

export const Card=({curMovie})=>{
   const {Poster, imdbID} = curMovie

   return(
    <>
        <li className="li-card">
            <img src={Poster} alt={imdbID} className="li_img"/>
            <NavLink to={`/movie/${imdbID}`}>
            <button className="li_button">Watch Now</button>
            </NavLink>
        </li>
    </>
   )
   
}