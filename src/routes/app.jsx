import DashboardPage from "views/Dashboard/Dashboard.jsx";
import JobInputPage from "views/JobInput/JobInput.jsx";
import JobStatusPage from "views/JobStatus/JobStatus.jsx";
import ObjectivesPage from "views/Objectives/Objectives.jsx";
import ProjectsPage from "views/Projects/Projects.jsx";
import AnalysisPage from "views/Analysis/Analysis.jsx";
import LogsPage from "views/Logs/Logs.jsx";

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
    component: JobInputPage
  },
  {
    path: "/status",
    sidebarName: "Job Status",
    navbarName: "Job Status",
    icon: ContentPaste,
    component: JobStatusPage
  },
  {
    path: "/objectives",
    sidebarName: "Objectives",
    navbarName: "Objectives",
    icon: LibraryBooks,
    component: ObjectivesPage
  },
  {
    path: "/analysis",
    sidebarName: "Analysis",
    navbarName: "Analysis",
    icon: BubbleChart,
    component: AnalysisPage
  },
  {
    path: "/projects",
    sidebarName: "Projects",
    navbarName: "Projects",
    icon: LocationOn,
    component: ProjectsPage
  },
  {
    path: "/logs",
    sidebarName: "Logs",
    navbarName: "Logs",
    icon: Notifications,
    component: LogsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
