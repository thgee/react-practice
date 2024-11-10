import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  background: linear-gradient(135deg, #d9afd9, #97d9e1);

  padding: 60px 0;
`;
export const TrashCan = styled(FaTrashAlt)`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 3.3rem;
  color: #fff;
  padding: 6px;
  border-radius: 100px;
  border: 2.4px solid #fff;
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
