import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 1.6rem;
  color: ${(props) => props.theme.textColor};
  display: block;
  font-weight: 800;
`;
const SubmitBtn = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
`;

const Coins = () => {
  return (
    <Container>
      <Title>코인 목록</Title>
      <SubmitBtn> 전송버튼 </SubmitBtn>
    </Container>
  );
};

export default Coins;
