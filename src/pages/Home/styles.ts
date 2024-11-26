import styled from "@emotion/styled";
import { FaShapes } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100vh;
  gap: 40px;
`;
const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  span {
    font-size: 1.4rem;
  }
`;
export const TrelloWrap = styled(IconWrap)`
  color: #00ccff;
`;
export const TrelloBtn = styled(RiCalendarTodoFill)`
  font-size: 4rem;
`;

export const FramerWrap = styled(IconWrap)`
  color: #e91e63;
`;
export const FramerBtn = styled(FaShapes)`
  font-size: 4rem;
`;
