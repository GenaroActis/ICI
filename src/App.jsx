import Index from "./Pages/Index";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Contacto from "./Pages/Contacto";
import Inscripcion from "./Pages/Inscripcion";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/button.css"
import "./sass/header.css"
import "./sass/reset.css"
import "./sass/index.css"
import "./sass/footer.css"
import "./sass/Inscripcion.css"
import "./sass/contacto.css"
import "./sass/inputs.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route exact path="/ici" element={<Index/>}/>
        <Route exact path="/ici/inscripcion" element={<Inscripcion/>}/>
        <Route exact path="/ici/contacto" element={<Contacto/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
