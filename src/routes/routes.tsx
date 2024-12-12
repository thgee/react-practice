import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Trello } from "../pages/Trello/Trello";
import { Framer } from "../pages/Framer/Framer";
import { Main } from "../pages/Netflix/Main/Main";
import { NetflixLayout } from "../pages/Netflix/NetflixLayout";
import { Search } from "../pages/Netflix/Search/Search";
import { Tv } from "../pages/Netflix/Tv/Tv";

const isProduction = import.meta.env.MODE === "production";
const basename = isProduction ? "/react-practice" : ""; // 배포 환경에서만 basename 설정

export const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/trello", element: <Trello /> },
    { path: "/framer", element: <Framer /> },

    {
      path: "/netflix",
      element: <NetflixLayout />,
      children: [
        { path: "", element: <Main /> },
        { path: "search", element: <Search /> },
        { path: "tv", element: <Tv /> },
      ],
    },
  ],
  { basename }
);
