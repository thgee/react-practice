import styled from "@emotion/styled";
import { darkTheme } from "../../theme";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { CardStyle } from "../Card/styles";
import { FaCheck } from "react-icons/fa";

export const Title = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  margin: 20px 0;
  font-family: "CookieRun-bold";
`;

export const Wrapper = styled.ul`
  background-color: ${darkTheme.boardColor};
  width: 100%;
  border-radius: 10px;
  min-height: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
export const Area = styled.div<{
  isDraggingOver: boolean;
  isDraggingFrom: boolean;
}>`
  background-color: ${(p) =>
    p.isDraggingOver ? "#b0d7ff75" : p.isDraggingFrom ? "#ddd" : ""};
  transition: background-color 0.4s;
  flex-grow: 1;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddBtn = styled(IoIosAddCircleOutline)`
  cursor: pointer;
  color: #777;
  font-size: 1.8rem;
  margin: 8px 0;
  :hover {
    color: #333;
  }
`;

export const AddCardStyle = styled(CardStyle)`
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      gap: 6px;
    }
  }

  input {
    outline: none;
    border: none;
    width: 90%;
  }
`;

export const OkBtn = styled(FaCheck)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #00bb00;
`;
export const CancelBtn = styled(MdCancel)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
`;
