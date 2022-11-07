import "./App.css"
import AuthUser from './components/AuthUser';
import Header from "./components/header/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Homepage/Home"
import Footer from "./components/Footer/Footer";
import Login from "./components/login"
import Register from "./components/register"
import Courses from "./pages/Coursespage/Courses";
import About from "./pages/Aboutpage/About";
import ContactForm from "./pages/ContactUspage/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactForm/>} />
       </Routes>
         <Footer />
      </Router>
     
    </>
    )
}

export default App