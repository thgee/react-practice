import React, { useState, useEffect } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Price from "./Coin/Price";
import Chart from "./Coin/Chart";
import { useQuery } from "@tanstack/react-query";
import { apiGetCoinInfo, apiGetCoinPrice } from "../api";

const Container = styled.div`
  padding: 50px 0px;
  margin: 0 auto;
  max-width: 500px;
  min-width: 400px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  position: relative;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-left: 10px;
`;

const LoadingPage = styled.div<{ isMount: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  font-weight: 800;
  font-size: ${({ isMount }) => (isMount ? "2.4rem" : "1rem")};
  opacity: ${({ isMount }) =>
    isMount ? "1" : "0"}; /* isMount 상태에 따라 투명도 조절 */

  > p {
    margin-top: 10px;
    transition: inherit;
    font-size: ${({ isMount }) => (isMount ? "1.8rem" : "1rem")};
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const SectionA = styled.section``;
const OverviewBox = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
`;

const OverviewWrap = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 600;
  }
  p {
    margin-top: 3px;
  }
`;
const CoinDesc = styled.p`
  margin: 30px 0;
  font-size: 1.1rem;
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  padding: 30px;
`;

const Tab = styled.div<{ $isClick: boolean }>`
  text-align: center;
  flex-grow: 1;
  border-radius: 10px;
  background-color: ${(p) =>
    !p.$isClick ? p.theme.textColor : p.theme.btnColor};
  color: ${(p) => (!p.$isClick ? p.theme.btnColor : p.theme.textColor)};
  margin: 4px;

  a {
    display: inline-block;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HomeBtn = styled.button`
  position: absolute;
  left: 0;
  color: white;
  background: none;
  font-size: 3rem;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  type: string;
  logo: string;
  description: string;
  started_at: Date;
  links: string[];
}

interface IPreInfo {
  name: string;
  symbol: string;
}
function Coin() {
  const navigate = useNavigate();
  const { coinId } = useParams();
  const [isMount, setIsMount] = useState(false); // 마운트 시 애니메이션 추가를 위한 변수
  const preInfo: IPreInfo = useLocation().state; // 코인정보 호출 전에 미리 보여줄 정보들
  const matchUrlPrice = useMatch("/:coinId/price");
  const matchUrlChart = useMatch("/:coinId/chart");

  const { isLoading: isLoadingInfo, data: coinInfo } = useQuery({
    queryKey: [coinId, "info"],
    queryFn: () => apiGetCoinInfo(coinId as string),
  });

  const { isLoading: isLoadingPrice, data: coinPrice } = useQuery({
    queryKey: [coinId, "price"],
    queryFn: () => apiGetCoinPrice(coinId as string),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;
    setIsMount(true);

    // 마운트 끝나면
    if (!(isLoadingInfo || isLoadingPrice)) {
      timer1 = setTimeout(() => {
        setIsMount(false);
      }, 1500);

      timer2 = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    // 컴포넌트가 언마운트되면 타이머를 정리
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoadingPrice, isLoadingInfo]);

  // 로딩중
  if (isLoading)
    return (
      <LoadingPage isMount={isMount}>
        <h1>{preInfo?.name || "로딩중"}</h1>
        <p>{preInfo?.symbol}</p>
      </LoadingPage>
    );

  // 로딩완료
  return (
    <Container>
      <Header>
        <HomeBtn
          onClick={() => {
            navigate("/");
          }}
        >
          ←
        </HomeBtn>
        <Img src={coinInfo?.logo} />
        <Title>{coinInfo?.name}</Title>
      </Header>

      {/* 코인 정보 섹션*/}
      <SectionA>
        {/* 코인 정보 위쪽 박스 */}
        <OverviewBox>
          {/* 코인 정보 텍스트 랩*/}
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
        </OverviewBox>

        {/* 코인 설명 */}
        <CoinDesc>{coinInfo?.description}</CoinDesc>

        {/* 코인 정보 아래쪽 박스 */}
        <OverviewBox>
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
          <OverviewWrap>
            <h1>title</h1> <p>content</p>
          </OverviewWrap>
        </OverviewBox>
      </SectionA>

      {/* 차트, 가격  탭 버튼 */}
      <Tabs>
        <Tab $isClick={matchUrlChart !== null}>
          <Link to={"chart"}>chart</Link>
        </Tab>
        <Tab $isClick={matchUrlPrice !== null}>
          <Link to={"price"}>price</Link>
        </Tab>
      </Tabs>

      {/* 차트, 가격 컴포넌트 */}
      <Outlet context={{ priceData: coinPrice.quotes.USD }} />
    </Container>
  );
}

export default Coin;
