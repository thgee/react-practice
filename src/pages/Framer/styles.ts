import styled from "@emotion/styled";

export const FramerContainer = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
export const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(135deg, #eb21b1, #812aff);

  .logo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: "CookieRun-bold";
    font-size: 1.3rem;
  }
`;
