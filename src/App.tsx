import GlobalStyle from "./theme/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
