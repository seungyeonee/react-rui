import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./DefaultLayout";
import { MainPage, ButtonPage, SignupPage, FramerPage, GsapPage, ScrollPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/framer" element={<FramerPage />} />
          <Route path="/gsap" element={<GsapPage />} />
          <Route path="/gsap/scroll" element={<ScrollPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
