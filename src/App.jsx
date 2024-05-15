import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      {/* <MainLayout> */}
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/detail/:id" element={<Detail />} /> */}
        </Route>

        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/about" element={<AboutAdmin />} />
        </Route> */}

      </Routes>
      {/* </MainLayout> */}
    </BrowserRouter>
    //   <Home/>
  )
}

export default App
