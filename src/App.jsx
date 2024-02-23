import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/index"
import SignupPage from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
