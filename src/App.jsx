import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/index"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
