import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AllJobs from "./components/Pages/AllJobs";
import Browse from "./components/Pages/Browse";
import Profile from "./components/Pages/Profile";
import JobDescription from "./components/Pages/JobDescription";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <AllJobs />,
    },
    {
      path:"/job/description/:id",
      element:<JobDescription/>
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
