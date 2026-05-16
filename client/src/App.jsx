import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;