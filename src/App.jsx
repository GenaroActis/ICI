import Index from "./Pages/Index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Contacto from "./Pages/Contacto";
import Inscripcion from "./Pages/Inscripcion";
import Viajes from "./Pages/Viajes";
import Examenes from "./Pages/Examenes";
import Cursos from "./Pages/Cursos";
import Login from "./Login/Login";
import HeaderLog from "./Login/HeaderLog";
import FooterLog from "./Login/FooterLog"
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import SideBar from "./Header/SideBar";
import ContextProvider from './Context/Context';
import StudentProvider from "./Context/StudentContext";
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/button.css";
import "./sass/header.css";
import "./sass/reset.css";
import "./sass/index.css";
import "./sass/footer.css";
import "./sass/inscripcion.css";
import "./sass/contacto.css";
import "./sass/examenes.css";
import "./sass/login.css"
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
      <ContextProvider>
      <StudentProvider>
        <SideBar/>
        <div className="content">
          <Routes>
            <Route
              path="/ici/*"
              element={
                <>
                  <Header />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route index element={<Index />} />
              <Route path="inscripcion" element={<Inscripcion />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="viajes" element={<Viajes />} />
              <Route path="examenes" element={<Examenes />} />
              <Route path="cursos" element={<Cursos />} />
            </Route>
            <Route
              path="/login"
              element={
                <>
                  <HeaderLog/>
                  <Outlet />
                  <FooterLog/>
                </>
              }
            >
              <Route index element={<Login />} />
            </Route>
          </Routes>
        </div>
      </StudentProvider>
      </ContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
