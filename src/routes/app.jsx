import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "ForceBalance Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/input",
    sidebarName: "Job Input",
    navbarName: "Job Input",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/status",
    sidebarName: "Job Status",
    navbarName: "Job Status",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/objectives",
    sidebarName: "Objectives",
    navbarName: "Objectives",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/analysis",
    sidebarName: "Analysis",
    navbarName: "Analysis",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/projects",
    sidebarName: "Projects",
    navbarName: "Projects",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
