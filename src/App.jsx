import Index from "./Pages/Index";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/button.css"
import "./sass/header.css"
import "./sass/reset.css"
import "./sass/index.css"
import "./sass/footer.css"

function App() {
  return (
    <>
    <Header/>
    <Index/>
    <Footer/>
    </>
  );
}

export default App;
