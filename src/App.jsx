import About from "./components/About"
import CardDetail from "./components/CardDetail"
import Cards from "./components/Cards"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"

const App = () => {


  return (
    <>
      <Navbar/>
      <Cards />
      <CardDetail/>
      <Cart/>
      <Checkout/>
      <About/>
      <Contact/>
      <Login/>
      <Register/>
      <Footer/>
    </>
  )
}

export default App
