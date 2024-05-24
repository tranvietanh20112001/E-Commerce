import { IRoute } from "@interfaces/route.interface";
import { Login } from "@pages/auth/login/Login";
import { Register } from "@pages/auth/login/Register";

export const AuthRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
];
