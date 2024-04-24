import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
  max-width: 800px;
  min-width: 400px;
`;
const Header = styled.header``;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
`;
const CoinList = styled.ul`
  border: 1px solid #fff;
  padding: 30px;
  width: 100%;
`;

const Coin = styled.li<{ color: string; $reverseColor: string }>`
  background-color: ${(props) => props.theme.textColor};
  margin: 6px 0;
  padding: 30px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  color: ${(p) => p.theme.bgColor};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ color }) => color};
    color: ${({ $reverseColor }) => $reverseColor};
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

interface coinDataType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
}

const Coins = () => {
  const [coinData, setCoinData] = useState<coinDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setCoinData(
        (await (await fetch("https://api.coinpaprika.com/v1/tickers")).json())
          .slice(0, 100)
          .map(
            ({
              id,
              name,
              symbol,
              rank,
              quotes: {
                USD: { price },
              },
            }: any): coinDataType => ({ id, name, symbol, rank, price })
          )
      );

      setLoading(false);
    })();
  }, []);
  const navigate = useNavigate();

  const getRandomColor = (flag: boolean) => {
    let [r, g, b] = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ];
    return flag
      ? `rgb(${r},${g},${b})`
      : `rgb(${255 - r},${255 - g},${255 - b})`;
  };
  return (
    <Container>
      <Header>
        <Title>코인 페이지</Title>
      </Header>
      {loading ? (
        <Loading>로딩중...</Loading>
      ) : (
        <CoinList>
          {coinData.map((it) => (
            <Coin
              key={it.id}
              color={getRandomColor(true)}
              $reverseColor={getRandomColor(false)}
              onClick={() => navigate(`/${it.name}`)}
            >
              {it.name} ({it.symbol}) →
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
