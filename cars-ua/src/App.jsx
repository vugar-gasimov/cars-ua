import { Suspense } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Catalogues from "./pages/Catalogues";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Loader from "./components/loader/Loader";
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
