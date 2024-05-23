import { IRoute } from "../interfaces/route.interface";
import Homepage from "../pages/home/homepage/homepage";
import Contact from "../pages/home/contact/Contact";
import { About } from "../pages/home/about/About";
import { Login } from "../pages/auth/login/Login";
import { Register } from "../pages/auth/login/Register";

export const HomeRoutes: IRoute[] = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
];
