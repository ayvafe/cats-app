import React, { Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Images from "./components/Images";
import LoadingIndicator from "./components/LoadingIndicator";

const AppRoutes = () => (
  <Suspense fallback={<LoadingIndicator />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/images/:category' element={<Images />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
