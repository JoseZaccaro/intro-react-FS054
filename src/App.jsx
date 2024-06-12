import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import { useSelector } from "react-redux";
import AuthRoute from "./HOCs/AuthRoute";
import NoAuthRoute from "./HOCs/NoAuthRoute";
import RouteHoc from "./HOCs/RouteHoc";


const routesAuth = [
  {
    path: "/profile",
    element: <Profile />,
    key: "Profile",
  },
  {
    path: "/settings",
    element: <Profile />,
    key: "Settings",
  }
]
const routesNoAuth = [
  {
    path: "/login",
    element: <Login />,
    key: "Login",
  },
  {
    path: "/register",
    element: <Login />,
    key: "Register",
  }
]

const routesAll = [
  {
    path: "/",
    element: Home,
    key: "Home",
  },
  {
    path: "/contact",
    element: Home,
    key: "Contact",
  }
]

function App() {




  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />}>

          {
            routesAll.map(route => RouteHoc(route.element, route.path, route.key))
          }
          {
            routesNoAuth.map(NoAuthRoute)
          }
          {
            routesAuth.map(AuthRoute)
          }
          <Route path="*" element={<Navigate to="/" />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
