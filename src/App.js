import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from "./components/Navbar";
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/blogs" element={ <Blogs />} />
            <Route path="/blogs/:title" element={ <Blog />} />
            <Route path="/user" element={ <User />} />
            <Route path="*" element={ <Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
