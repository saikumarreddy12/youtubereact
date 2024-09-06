import CustomButton from "./components/button/button"
import Index from "./youtube/usestate"

import Home from "./Home"
import Contact from "./Contact"
import Login from "./login"
import About from "./About"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'




const Head=()=>{
  return(
  

    <ul>
      <li>  <Link to="/">  Home</Link>     </li>
      <li>   <Link to="/about">  About</Link>          </li>
      <li>   <Link to="/contact">  Contact</Link>                  </li>
      <li>   <Link to="/login">  Login</Link>                </li>
    </ul>
    
    
    
  )
}




const App=()=>{
  return(
    <div>
    <>
      <BrowserRouter>
         <Head/>
      <Routes>

        <Route  path="/"  element={ <Home/>  }    />
        <Route  path="/about"  element={ <About/>  }    />
        <Route  path="/Contact"  element={ <Contact/>  }    />
        <Route  path="/login"  element={ <Login/>  }    />

        
      </Routes>

      
      
      
      </BrowserRouter>

      </>




      




{/*       
     <Home/>

      app component */}




          {/* <Index/> */}
    </div>
      
    // <CustomButton/>
  )
}


export default App