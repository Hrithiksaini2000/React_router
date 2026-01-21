import { useLoaderData } from "react-router-dom"
import { Card } from "../components/ui/Card"

export const Movie=()=>{
    const movies = useLoaderData()
    console.log(movies)

    return(
        <>
        <ul className="ul-grid">
            {movies.Search.map((curmovie)=>{
                return <Card key={curmovie.imdbID} curMovie={curmovie} />

            })}
        </ul>
        </>
    )
}