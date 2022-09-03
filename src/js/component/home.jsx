import { Routes, Route, Link }  from "react-router-dom";   
import Navbar from "./navbar";
import Footer from "./footer";

const Home = () => {
    return (
        <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Navbar />} />
    </Routes>
      </>
    );
};

export default Home;
