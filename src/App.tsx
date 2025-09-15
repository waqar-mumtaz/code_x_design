import Home from "./pages/home";
import Header from "./components/header";
import Services from "./pages/services";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
