import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const Errorpage=()=>{

    // use routerror hook 
    const error = useRouteError()

    // usenavigate hook
    const navigate = useNavigate()

    const handlenavigate = ()=>{
        navigate(-1)
    }

    console.log(error)

    return(
        <>
            <h1>404 Error</h1>
            {/* userouterror implementation */}

            {/* <NavLink to="/">Go Back To Home Page</NavLink> */}

            {/* usenavigate hook */}
            <button onClick={handlenavigate}>Go Back</button>
        </>
    )
}