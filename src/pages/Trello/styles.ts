import styled from "@emotion/styled";
import { IoIosAdd } from "react-icons/io";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
  background: linear-gradient(135deg, #d9afd9, #97d9e1);
  min-height: 100vh;
  padding: 60px 30px;
  width: fit-content;
  position: relative;
  width: 100%;
  min-width: fit-content;
`;

export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  gap: 30px;
  min-width: 1000px;
  flex-wrap: wrap;
`;

export const BoardPlaceholder = styled.div<{ isAdding?: boolean }>`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  border-radius: 10px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  border: 2.4px solid #eee;
  align-items: center;

  cursor: ${(p) => (p.isAdding ? "" : "pointer")};

  transition: all 0.2s;
  :hover {
    background-color: ${(p) => (p.isAdding ? "" : "#fff")};
    > * {
      color: ${(p) => (p.isAdding ? "" : "#000")};
    }
  }
`;

export const AddBoardBtn = styled(IoIosAdd)`
  transition: all 0.2s;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`;

export const AddBoardLabel = styled.span`
  font-size: 1.2rem;
`;

export const AddBoardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  input {
    border: none;
    padding: 10px;
    border-radius: 8px;
    outline: none;

    :focus {
      outline: 2px solid #3366ff;
    }
  }

  .btn-wrap {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: end;
    margin-right: 10px;
  }
`;
