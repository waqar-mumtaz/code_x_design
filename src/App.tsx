import Home from "./pages/home";
import Header from "./components/header";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
