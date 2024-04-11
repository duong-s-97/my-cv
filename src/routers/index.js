import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";

// Public routes
const publicRoutes = [
  {
    id: 1,
    name: "Trang chủ",
    icon: <i className="fa-light fa-house-heart"></i>,
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    id: 2,
    name: "Dự án",
    icon: <i className="fa-light fa-rectangle-history-circle-user"></i>,
    path: "/projects",
    component: Projects,
    exact: true,
  },
];

export { publicRoutes };
