import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";

export const TrashCanContainer = styled.div<{ isDraggingOver: boolean }>`
  position: fixed;
  left: 50vw;
  top: -10px;
  background-color: ${(p) => (!p.isDraggingOver ? "#ff5500" : "#ff0011")};
  width: 120px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0 0 55px 55px;
  transform: translate(-50%, 00%) scale(${(p) => (p.isDraggingOver ? 1.2 : 1)});
`;

export const TrashCanIcon = styled(FaTrashAlt)<{ isDraggingOver: boolean }>`
  font-size: 2rem;
  color: #fff;
`;
