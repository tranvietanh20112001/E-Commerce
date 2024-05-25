import { IRoute } from "@interfaces/route.interface";
import Homepage from "@pages/home/homepage/homepage";
import Contact from "@pages/home/contact/Contact";
import { About } from "@pages/home/about/About";
import ProductDetail from "@pages/home/productDetail/productDetail";
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
    path: "/product/:id",
    component: <ProductDetail />,
  },
];
