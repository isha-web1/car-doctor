import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>

        }
      ]
    },
  ]);

  export default router;