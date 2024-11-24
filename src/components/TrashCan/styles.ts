import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";

export const TrashCanContainer = styled.div`
  position: fixed;
  left: 50vw;
  top: -10px;
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0 0 55px 55px;
  opacity: 0;
  background-color: #ff0011;
  translate: 0 -20%;
  z-index: 9999;
  &.on-drag-over&.trash-can-board,
  &.on-drag-over&.trash-can-todo {
    background-color: #ff5500;
    scale: 1.3;
  }
`;

export const TrashCanIcon = styled(FaTrashAlt)<{ isDraggingOver: boolean }>`
  font-size: 2rem;
  color: #fff;
`;
