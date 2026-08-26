import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import { Grain } from "./components/Grain";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <Grain />
      <div className="vignette" aria-hidden />
      <ScrollProgress />
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}
