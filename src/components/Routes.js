import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "./Loading";

const TodoAdd = lazy(()=>import("./todo/todo-add"));
const Header = lazy(()=>import("./header/Header"));
const ErrorPage = lazy(()=>import("./ErrorPage"));
const TodoDisplay = lazy(()=>import("./todo/todo-display"));
const News = lazy(()=>import("./newsblog/News"));

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Header />,
        errorElement:<ErrorPage />,
        children: [
            {
                index: true,
                path:"/",
                element:<TodoAdd />
            },
            {
                index: true,
                path:"/Add",
                element:<TodoAdd />
            },
            {
                path:"/Display",
                element:<TodoDisplay />
            },
            {
                path:"/Blogs",
                element:<News />
            }
        ]
    },
   
])

const Routes = () => {
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    );
  };
  
  export default Routes;