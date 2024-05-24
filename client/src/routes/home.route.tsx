import { IRoute } from "@interfaces/route.interface";
import Homepage from "@pages/home/homepage/homepage";
import Contact from "@pages/home/contact/Contact";
import { About } from "@pages/home/about/About";

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
];
