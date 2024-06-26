import { IRoute } from "@interfaces/route.interface";
import Homepage from "@pages/home/homepage/homepage";
import Contact from "@pages/home/contact/Contact";
import { About } from "@pages/home/about/About";
import ProductDetail from "@pages/home/productDetail/productDetail";
import Account from "@pages/home/account/Account";
import ErrorHomePage from "@pages/home/error/ErrorHomePage";
import Cart from "@pages/home/cart/Cart";
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
  {
    path: "/profile/:id",
    component: <Account />,
  },
  {
    path: "/error",
    component: <ErrorHomePage />,
  },

  {
    path: "/cart",
    component: <Cart />,
  },
];
