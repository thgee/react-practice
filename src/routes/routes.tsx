import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Trello } from "../pages/Trello/Trello";
import { Framer } from "../pages/Framer/Framer";
console.log(import.meta.env.MODE);
const isProduction = import.meta.env.MODE === "production";
const basename = isProduction ? "/react-practice" : ""; // 배포 환경에서만 basename 설정

export const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/trello", element: <Trello /> },
    { path: "/framer", element: <Framer /> },
  ],
  { basename }
);
