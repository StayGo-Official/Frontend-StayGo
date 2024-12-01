import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Homepage, Dashboard, KebijakanPrivasi, SyaratKetentuan, LoginPage, ListKost, AddKost, ListOjek, AddOjek, ListCustomer, ViewKost, ViewOjek, EditKost } from "./Pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const AppContent = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isKebijakanPrivasi = location.pathname === "/kebijakan-privasi";
  const isSyaratKetentuan = location.pathname === "/syarat-dan-ketentuan";

  // Toggle class body-no-scroll
  useEffect(() => {
    if (activeMenu) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [activeMenu]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* Tombol Settings dengan Tooltip */}
        { !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan && (
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
              data-tooltip-id="settings-tooltip"
              data-tooltip-content="Settings"
            >
              <FiSettings />
            </button>
            <Tooltip id="settings-tooltip" place="top" effect="solid" />
          </div>
        )}

        {/* Sidebar */}
        { !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan && activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan ? (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : null}

        {/* Main Content */}
        <div
          className={`main-content dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu && !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan ? "sidebar-visible" : "full-width"
          }`}
        >
          { !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan && (
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          )}

          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
              <Route path="/syarat-dan-ketentuan" element={<SyaratKetentuan />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kost" element={<ListKost />} />
              <Route path="/add-kost" element={<AddKost />} />
              <Route path="/edit-kost/:id" element={<EditKost />} />
              <Route path="/kost/:id" element={<ViewKost />} />
              <Route path="/ojek" element={<ListOjek />} />
              <Route path="/ojek/:id" element={<ViewOjek />} />
              <Route path="/add-ojek" element={<AddOjek />} />
              <Route path="/customers" element={<ListCustomer />} />
            </Routes>
          </div>

          { !isHomepage && !isLoginPage && !isKebijakanPrivasi && !isSyaratKetentuan && <Footer />}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
