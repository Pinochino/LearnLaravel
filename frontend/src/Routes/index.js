import routeConfig from "~/configs/routeConfig";
import BarPage from "~/pages/Bar";
import Calendar from "~/pages/Calendar";
import Contact from "~/pages/Contacts";
import Faq from "~/pages/Faq";
import Form from "~/pages/Form";
import GeographyPage from "~/pages/Geography";
import Invoices from "~/pages/Invoices";
import LinePage from "~/pages/Line";
import PiePage from "~/pages/Pie";
import Team from "~/pages/Team";
import Dashboard from "~/scenes/dashboard";

const publicRoutes = [
  {
    path: routeConfig.home,
    component: Dashboard,
  },
  {
    path: routeConfig.contact,
    component: Contact,
  },
  {
    path: routeConfig.faq,
    component: Faq,
  },
  {
    path: routeConfig.invoices,
    component: Invoices,
  },
  {
    path: routeConfig.line,
    component: LinePage,
  },
  {
    path: routeConfig.pie,
    component: PiePage,
  },
  {
    path: routeConfig.team,
    component: Team,
  },
  {
    path: routeConfig.form,
    component: Form,
  },
  {
    path: routeConfig.calendar,
    component: Calendar,
  },
  {
    path: routeConfig.bar,
    component: BarPage
  },
  {
    path: routeConfig.geography,
    component: GeographyPage
  },
];

const privateRoutes = []

export {publicRoutes, privateRoutes}
