import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  background: linear-gradient(135deg, #d9afd9, #97d9e1);
  min-height: 100vh;
  padding: 60px 0;
`;

export const Boards = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  margin-top: 40px;

  min-width: 1000px;
  flex-wrap: wrap;
  gap: 18px;
`;
