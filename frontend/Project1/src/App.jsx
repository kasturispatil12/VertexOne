import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

import Login from "./admin/pages/login";
import Admin from "./admin/pages/Admin";
import Dashboard from "./admin/pages/Dashboard";
import ComponentsAdmin from "./admin/pages/ComponentsAdmin";
import ServicesAdmin from "./admin/pages/ServicesAdmin";
import FAQAdmin from "./admin/pages/FAQAdmin";

import ProtectedRoute from "./admin/components/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>

        {/* User Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:id" element={<ComponentDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />

        

        <Route
          path="/admin/login"
          element={<Login />}
        />



        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="components"
            element={<ComponentsAdmin />}
          />

          <Route
            path="services"
            element={<ServicesAdmin />}
          />

          <Route
            path="faqs"
            element={<FAQAdmin />}
          />

        </Route>

      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;