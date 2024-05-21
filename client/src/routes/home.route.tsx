import { IRoute } from "../interfaces/route.interface";
import Homepage from "../pages/home/homepage/homepage";
export const HomeRoutes: IRoute[] = [
  {
    path: "/",
    component: <Homepage />,
  },
];
