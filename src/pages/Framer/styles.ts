import styled from "@emotion/styled";

export const Bg = styled.div`
  height: 130vh;
  min-width: fit-content;
  padding: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FramerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 10px;
`;
