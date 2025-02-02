//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
