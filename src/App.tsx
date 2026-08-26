import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import { Grain } from "./components/Grain";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Grain />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}
