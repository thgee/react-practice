import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "../../atoms";
import { CardStyle } from "./styles";

interface ICardProps {
  todo: ITodo;
  idx: number;
}

export const Card = ({ todo, idx }: ICardProps) => {
  return (
    <Draggable key={todo.id} draggableId={`todo-${todo.id}`} index={idx}>
      {(provided, snapshot) => (
        <CardStyle
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          className={`${snapshot.isDragging ? "on-drag-todo" : ""}`}
        >
          {todo.text}
        </CardStyle>
      )}
    </Draggable>
  );
};
