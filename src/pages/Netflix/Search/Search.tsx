import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return <h1 style={{ margin: 140, fontSize: "3rem" }}>{query}</h1>;
};
