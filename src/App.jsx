import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import FAQPage from "./pages/FAQPage";
import SdanKPage from "./pages/SdanKPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimoni" Component={TestimoniPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/sdank" Component={SdanKPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
