import Main from "./Components/Main";
import Quiz from "./Components/Quiz";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./Components/Result";
import Login from "./Components/LocalStorageAuth/Login";
import Home from "./Components/LocalStorageAuth/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },

  {
    path: "/home",
    element: <Home></Home>,
  },

  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },

  {
    path: "/result",
    element: <Result />,
  },
]);

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
