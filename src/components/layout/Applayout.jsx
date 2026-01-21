import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

const Applayout=()=>{

    const navigation = useNavigation()
    console.log(navigation)
    if (navigation.state=="loading"){
        return <h1>loading......</h1>
    }
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Applayout