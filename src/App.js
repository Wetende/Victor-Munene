import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop";

// Main Pages
const Home = lazy(() => import("./Pages/Home"));

// Portfolio Pages
const PortfolioLayout = lazy(() => import("./Pages/PortfolioLayout"));
const PortfolioGrid = lazy(() => import("./Pages/PortfolioGrid"));
const Project01 = lazy(() => import("./Pages/Project01"));
const Project02 = lazy(() => import("./Pages/Project02"));
const Project03 = lazy(() => import("./Pages/Project03"));
const Project04 = lazy(() => import("./Pages/Project04"));
const Project05 = lazy(() => import("./Pages/Project05"));

// About, Services, Contact Pages
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));

// System Pages
const NotFoundPage = lazy(() => import("./Pages/404"));
const Privacy = lazy(() => import("./Pages/Privacy"));

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false,
  });
  const location = useLocation();

  // RetinaJS
  useEffect(() => {
    window.addEventListener("load", retina(document.querySelectorAll("img")));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then((module) => {
        module.SetHeaderMenuPos();
        module.setDocumentFullHeight();
      });
    }, 1000);
  }, [location]);

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence mode="wait">
              <Suspense fallback={<></>}>
                <Routes>
                  {/* Home */}
                  <Route
                    path="/"
                    element={
                      <Home style={{ "--base-color": "#ffeb04" }} />
                    }
                  />

                  {/* About */}
                  <Route
                    path="/page/about-me"
                    element={
                      <About style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Services */}
                  <Route
                    path="/page/our-services"
                    element={
                      <Services style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Portfolio */}
                  <Route
                    path="portfolio"
                    element={
                      <PortfolioLayout style={{ "--base-color": "#0038e3" }} />
                    }
                  >
                    <Route
                      path="portfolio-colorful-metro"
                      element={
                        <PortfolioGrid style={{ "--base-color": "#fff" }} />
                      }
                    />
                  </Route>

                  {/* Single Project Pages */}
                  <Route
                    path="/portfolio/single-project-page-01"
                    element={
                      <Project01 style={{ "--base-color": "#0038e3" }} />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-02"
                    element={
                      <Project02 style={{ "--base-color": "#0038e3" }} />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-03"
                    element={
                      <Project03 style={{ "--base-color": "#0038e3" }} />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-04"
                    element={
                      <Project04 style={{ "--base-color": "#fd961e" }} />
                    }
                  />
                  <Route
                    path="/portfolio/single-project-page-05"
                    element={
                      <Project05 style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Contact */}
                  <Route
                    path="/page/contact-modern"
                    element={
                      <Contact style={{ "--base-color": "#0038e3" }} />
                    }
                  />

                  {/* Privacy */}
                  <Route
                    path="/privacy"
                    element={<Privacy style={{ "--base-color": "#0038e3" }} />}
                  />

                  {/* 404 - Catch all */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
