import { IRoute } from "../interfaces/route.interface";
import { Login } from "../pages/home/login/Login";

export const AuthRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
];
