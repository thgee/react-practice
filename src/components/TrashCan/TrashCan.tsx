import { Droppable } from "react-beautiful-dnd";
import { TrashCanContainer, TrashCanIcon } from "./styles";

interface ITrashCanProps {
  mode: "board" | "todo";
}

export const TrashCan = ({ mode }: ITrashCanProps) => {
  return (
    <Droppable
      droppableId={`${mode}-trashCan`}
      key={`${mode}-trashCan`}
      type={mode}
    >
      {(provided, snapshot) => (
        <TrashCanContainer {...provided.droppableProps} ref={provided.innerRef}>
          <TrashCanIcon isDraggingOver={snapshot.isDraggingOver} />
        </TrashCanContainer>
      )}
    </Droppable>
  );
};
