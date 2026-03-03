import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardItems from "./DashboardItems";
import Dashboard from "./Dashboard";
import Comments from "./Comments";
import CommentsItems from "./CommentsItems";
import Post from "./Post";
import PostItems from "./PostItems";
import Missing from "./Missing";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/:id", element: <DashboardItems /> },
  {path: "/comments", element: <Comments />},
  { path: "/comments/:id", element: <CommentsItems /> },
  { path: "/post", element: <Post /> },
  { path: "/post/:id", element: <PostItems /> },
  {path: "/*",element: <Missing/>},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
