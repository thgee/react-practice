import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Trello } from "../pages/Trello/Trello";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/trello", element: <Trello /> },
]);
