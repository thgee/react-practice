import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Trello } from "../pages/Trello/Trello";
import { Framer } from "../pages/Framer/Framer";
import { Netflix } from "../pages/Netflix/Netflix";

export const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/trello", element: <Trello /> },
    { path: "/framer", element: <Framer /> },
    { path: "/netflix", element: <Netflix /> },
  ],
  { basename: `/react-practice/` }
);
