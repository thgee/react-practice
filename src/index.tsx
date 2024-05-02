import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle /> {/* 공통 CSS를 위함*/}
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
);
