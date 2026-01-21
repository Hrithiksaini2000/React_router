export const GetMoviesdata = async ()=>{

    // const API_URl = import.meta.env.VITE_API_KEY
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=Batman&page=2&apikey=${import.meta.env.VITE_API_KEY}`)
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}