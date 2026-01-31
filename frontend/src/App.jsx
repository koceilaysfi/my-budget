import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "transactions",
        element: <History />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "new-transacation",
        element: <TransactionForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
const Root = () => {
  return <Outlet />;
};
export default App;
