//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
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
          <Route path="/about" element={<Article />} />
          <Route path="/galery" element={<Article />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Article />} />
          <Route path="/service" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
