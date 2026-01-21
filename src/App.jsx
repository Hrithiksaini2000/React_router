import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Movie } from "./pages/Service"
import { Contact, contactdata } from "./pages/Contact"
import Applayout from "./components/layout/Applayout"
import "./App.css"
import { Errorpage } from "./pages/Errorpage"
import { GetMoviesdata } from "./api/GetApidata"
import { Moviedetail } from "./components/ui/Moviedetail"
import { GetMoviesdetail } from "./api/Getmoviedetail"

const App = () => {
  // Objects Method To Create Route Without Helper Function 
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Applayout/>,
      errorElement: <Errorpage/>,
      children:[
        {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/movie",
      element: <Movie />,
      loader: GetMoviesdata
    },
    // How TO create a dynamic route
    {
      path: "/movie/:movieId",
      element: <Moviedetail />,
      loader: GetMoviesdetail
    },
    {
      path: "/contact",
      element: <Contact />,
      action: contactdata
    }
      ]
    }
  ])

  // Helper function to create routes

    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/movie" element={<Movie />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Route>
    //   )
    // )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App