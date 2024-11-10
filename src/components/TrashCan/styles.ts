import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";

export const TrashCanContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const TrashCanIcon = styled(FaTrashAlt)<{ isDraggingOver: boolean }>`
  font-size: 3.7rem;
  padding: 6px;
  border-radius: 20px;
  transition: all 0.2s;
  color: ${(p) => (p.isDraggingOver ? "#ff0033" : "#fff")};
  border: 2.4px solid ${(p) => (p.isDraggingOver ? "#ff0033" : "#fff")};
`;
