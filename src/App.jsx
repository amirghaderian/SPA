import { About, Home, Vans } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
