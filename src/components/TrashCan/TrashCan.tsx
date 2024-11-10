import { Droppable } from "react-beautiful-dnd";
import { TrashCanContainer, TrashCanIcon } from "./styles";

export const TrashCan = () => {
  return (
    <Droppable droppableId="trashCan" key="trashCan">
      {(provided, snapshot) => (
        <TrashCanContainer {...provided.droppableProps} ref={provided.innerRef}>
          <TrashCanIcon isDraggingOver={snapshot.isDraggingOver} />
        </TrashCanContainer>
      )}
    </Droppable>
  );
};
