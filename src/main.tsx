import { createRoot } from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>
);
