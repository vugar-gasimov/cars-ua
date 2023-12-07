import { Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Loader from "./components/loader/Loader";
import Catalogues from "./pages/catalogues/Catalogues";
import Favorites from "./pages/favorites/Favorites";
import Home from "./pages/home/Home";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
