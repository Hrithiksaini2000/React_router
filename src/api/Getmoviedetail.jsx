export const GetMoviesdetail = async ({params})=>{

    console.log(params)
    const id = params.movieId
    // const API_URl = import.meta.env.VITE_API_KEY
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}