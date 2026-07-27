import { Routes, Route } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import ScrollManager from "./components/ScrollManager";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Platform from "./pages/Platform";

export default function App() {
  useLenis();

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
