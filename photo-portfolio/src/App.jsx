import Home from "./pages/Home.jsx"
import Work from "./pages/Work.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Portraits from "./pages/Portraits.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="/work" element={<Work/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/portraits" element={<Portraits/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App
