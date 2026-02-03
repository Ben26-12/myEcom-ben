import HeaderOnly from "@/components/Layout/HeaderOnly";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import About from "@/Pages/About";
import LogIn from "@/Pages/LogIn";
import Search from "@/Pages/Search";
import Contact from "@/Pages/Contact";
import config from "@/config";
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.shop,
    component: Shop, //collection page
  },
  {
    path: config.routes.about,
    component: About,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
  {
    path: config.routes.login,
    component: LogIn,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: HeaderOnly,
  },
];

export const privateRoutes = {};

//không truyền gì -> mainLayout
//có truyền layout = null -> không cần layout
//có truyền thì lấy
