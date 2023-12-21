import { About, Home } from "./pages";
import { Routes, Route, Link } from "react-router-dom";
import { Footer, Navbar } from "./components";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
