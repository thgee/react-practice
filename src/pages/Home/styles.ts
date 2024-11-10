import styled from "@emotion/styled";
import { RiCalendarTodoFill } from "react-icons/ri";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100vh;
`;
export const TrelloWrap = styled.div`
  color: #00ccff;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 1.4rem;
  }
`;
export const TrelloBtn = styled(RiCalendarTodoFill)`
  font-size: 4rem;
`;
