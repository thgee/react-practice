import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import GlassBox from "../../components/GlassBox";

const Price = () => {
  const { priceData } = useOutletContext<IPrice>();

  return (
    <Container>
      <GlassBox width="100%">
        <h2>제목</h2>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </GlassBox>
    </Container>
  );
};

export default Price;

interface IPrice {
  priceData: {
    price: number;
    ath_date: Date;
    ath_price: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
  };
}

const Container = styled.div`
  width: 100%;
  padding: 30px;
`;
