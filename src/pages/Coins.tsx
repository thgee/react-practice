import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
  border-radius: 10px;
`;

const Coin = styled.li<{ $color: string; $reverseColor: string }>`
  background-color: ${(props) => props.theme.textColor};
  margin: 6px 0;
  padding: 30px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  color: ${(p) => p.theme.bgColor};
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ $color }) => $color};
    color: ${({ $reverseColor }) => $reverseColor};

    Img {
      box-shadow: 0 0 10px 4px ${({ $reverseColor }) => $reverseColor};
    }
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const Img = styled.img<{ $color: string; $reverseColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px 4px ${({ $color }) => $color};
  margin-right: 30px;
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
          .slice(0, 50)
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
          {coinData.map((it) => {
            const color = getRandomColor(true);
            const reverseColor = getRandomColor(false);
            return (
              <Coin
                key={it.id}
                $color={color}
                $reverseColor={reverseColor}
                onClick={() =>
                  navigate(`/${it.id}`, {
                    state: { name: it.name, symbol: it.symbol },
                  })
                }
              >
                <Img
                  $color={color}
                  $reverseColor={reverseColor}
                  src={`https://cryptoicon-api.pages.dev/api/icon/${it.symbol.toLowerCase()}`}
                />
                {it.name} ({it.symbol}) →
              </Coin>
            );
          })}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
