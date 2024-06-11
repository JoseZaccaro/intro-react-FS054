import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from './pages/Profile';




function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
