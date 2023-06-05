import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import Login from "../pages/auth/Login";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
       path:"/auth",
       element: <MainLayout/>,
       children: [
        { path: "login", element: <LoginApp /> },
        { path: "register", element: <RegistereApp /> },
        { path: "reset-password", element: <ResetPassWord /> },
        { path: "new-password", element: <NewPassWord /> },
      ]

    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <Group /> },
        { path: "call", element: <Call /> },
        { path: "profile", element: <Profile /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const LoginApp = Loadable(
  lazy(() => import("../pages/auth/Login.js"))
)
const RegistereApp = Loadable(
  lazy(() => import("../pages/auth/Resgiter"))
)
const ResetPassWord = Loadable(
  lazy(() => import("../pages/auth/ResetPassWord"))
)
const NewPassWord = Loadable(
  lazy(() => import("../pages/auth/NewPassWord"))
)
const Group = Loadable(
  lazy(() => import("../pages/dashboard/Group"))
)
const Call = Loadable(
  lazy(() => import("../pages/dashboard/Call"))
)
const Profile = Loadable(
  lazy(() => import("../pages/dashboard/Profile"))
)
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
