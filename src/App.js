import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import SoundBar from "./components/SoundBar";

import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
const NasaPhoto = lazy(() => import("./components/NasaPhoto"));

function App() {
  return (
    <>
      <SoundBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotonasa" element={<NasaPhoto />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
