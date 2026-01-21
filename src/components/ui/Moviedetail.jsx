import { useLoaderData, useParams } from "react-router-dom"

export const Moviedetail=()=>{
    // const params = useParams()
    // console.log(params)
    const moviesdata = useLoaderData()
    console.log(moviesdata)

    const {Poster, Title, Plot, Released, Runtime, Language} = moviesdata
    return(
        <>
            {/* <h2>Hello Movie Detail {params.movieId}</h2> */}

            <div className="detail_flex">
                <img src={Poster} alt={Poster} />
                <div>
                <h2>Name: {Title}</h2>
                <h4>
                    Plot: {Plot}
                </h4>
                <h4>
                    Released: {Released}
                </h4>
                <h4>
                    Run Time: {Runtime}
                </h4>
                <h4>
                    Language: {Language}
                </h4>
                </div>
            </div>
        </>
    )
}