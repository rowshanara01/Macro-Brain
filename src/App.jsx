import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Footer from './Footer/Footer';
import Homepage from "./Pages/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/* home */}
          <Route path="/" element={<Homepage ></Homepage>}  ></Route>
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
