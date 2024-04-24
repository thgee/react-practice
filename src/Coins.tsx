import { useEffect, useState } from "react";
import styled from "styled-components";

const coinData = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    total_supply: 19689475,
    max_supply: 21000000,
    beta_value: 1.04034,
    first_data_at: "2010-07-17T00:00:00Z",
    last_updated: "2024-04-24T08:56:16Z",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    total_supply: 122047160,
    max_supply: 0,
    beta_value: 1.04817,
    first_data_at: "2015-08-07T00:00:00Z",
    last_updated: "2024-04-24T08:56:16Z",
  },
  {
    id: "usdt-tether",
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    total_supply: 115886177433,
    max_supply: 0,
    beta_value: -0.000174534,
    first_data_at: "2015-02-25T00:00:00Z",
    last_updated: "2024-04-24T08:56:16Z",
  },
];

const Container = styled.div`
  padding: 30px;
`;
const Header = styled.header``;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
`;
const CoinList = styled.ul`
  border: 1px solid #fff;
  padding: 30px;
`;

const Coin = styled.li<{ color: string }>`
  background-color: ${(props) => props.color};
  margin: 6px 0;
  width: fit-content;
`;

const Coins = () => {
  const [colorChangeToggle, setColorChangeToggle] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorChangeToggle((it) => !it);
    }, 51200);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getRandomColor = () => {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
  };
  return (
    <Container>
      <Header>
        <Title>코인 페이지</Title>
      </Header>
      <CoinList>
        {coinData.map((it) => (
          <Coin key={it.id} color={getRandomColor()}>
            {it.name} {it.symbol}
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
};

export default Coins;
