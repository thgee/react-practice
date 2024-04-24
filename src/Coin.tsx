import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams<string>();
  return <h2>{coinId}</h2>;
}

export default Coin;
