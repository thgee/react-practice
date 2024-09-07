import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 50px;
  border-bottom: 1px solid #555;
  display: flex;
  width: 100vw;
  backdrop-filter: blur(10px);
  justify-content: center;
  z-index: 10;
`;

const Header = () => {
  const navigate = useNavigate();
  return <Container></Container>;
};

export default Header;
