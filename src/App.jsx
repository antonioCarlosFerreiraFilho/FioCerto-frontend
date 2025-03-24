//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Article from "./pages/Article/Article";
import Search from "./pages/Search/Search";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
//components
import TopHeader from "./components/TopContact/TopContact";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <TopHeader />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/article" element={<Article />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Home />} />
          <Route path="/register" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
