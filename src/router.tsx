import { createBrowserRouter } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Chart from "./pages/Coin/Chart";
import Price from "./pages/Coin/Price";
import App from "./App";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
