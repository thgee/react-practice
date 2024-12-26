import styled from "@emotion/styled";

export const CardStyle = styled.li<{ isDragging?: boolean }>`
  background-color: ${(p) => (p.isDragging ? "#3366ff" : "#fff")};
  color: ${(p) => (p.isDragging ? "#fff" : "")};
  border-radius: 4px;
  padding: 18px 10px;
  margin-bottom: 8px;
  border: ${(p) => (p.isDragging ? "2px solid #3300ff" : "1px solid #ddd")};
  opacity: ${(p) => (p.isDragging ? 0.7 : 1)};
  box-shadow: 0px 1px 0px #aaa;
  width: 100%;
`;
