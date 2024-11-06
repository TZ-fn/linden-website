import { createBrowserRouter } from "react-router-dom";
// import Layout from "components/Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
// import NoMatch from "pages/NoMatch/NoMatch";

const router = createBrowserRouter([
  {
    // element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "*",
      //   element: <NoMatch />,
      // },
    ],
  },
]);

export default router;
