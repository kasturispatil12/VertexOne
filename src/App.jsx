import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Components from "./pages/Components";
import ComponentDetails from "./pages/ComponentDetails";
import Compare from "./pages/Compare";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Comparison from "./pages/Comparison";
import ServiceDetail from "./pages/ServiceDetail";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:id" element={<ComponentDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;