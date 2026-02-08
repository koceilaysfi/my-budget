import "./styles/App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Spinner from "./components/Spinner.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "dashboard",
      //   element: <DashBoard />,
      // },
      // {
      //   path: "transactions",
      //   element: <History />,
      // },
      // {
      //   path: "profil",
      //   element: <Profil />,
      // },
      // {
      //   path: "new-transacation",
      //   element: <TransactionForm />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  return <Outlet />;
}
export default App;
