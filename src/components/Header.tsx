import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 50px;
  background-color: darkblue;
  display: flex;
  width: 100vw;
  color: ${({ theme }) => theme.textColor};
`;

const Header = () => {
  return <Container>header</Container>;
};

export default Header;
