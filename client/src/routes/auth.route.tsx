import { IRoute } from "../interfaces/route.interface";
import { Login } from "../pages/auth/login/Login";

export const AuthRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
];
