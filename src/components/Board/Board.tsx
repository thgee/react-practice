import { Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "../Card/Card";
import { useForm } from "react-hook-form";
import { todoState } from "../../atoms";
import { useSetRecoilState } from "recoil";
import {
  AddBtn,
  AddCardStyle,
  Area,
  BoardHandle,
  CancelBtn,
  OkBtn,
  Title,
  Wrapper,
} from "./styles";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IBoardProps, IForm } from "./types";
import { RxDragHandleDots2 } from "react-icons/rx";

export const Board = ({
  boardInfo: { boardId, boardName, todos },
  idx,
}: IBoardProps) => {
  const setTodo = useSetRecoilState(todoState);
  const [addMode, setAddMode] = useState(false);
  const { setValue, register, handleSubmit, setFocus } = useForm<IForm>();

  const cancelAdd = () => {
    setValue("newTodo", "");
    setAddMode(false);
  };

  const addCard = async () => {
    await setAddMode(true);
    setFocus("newTodo");
  };

  const onValid = ({ newTodo }: IForm) => {
    const _newTodo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodo((allBoards) => {
      // 투두가 추가되는 보드의 인덱스 boardIdx 찾기
      const boardIdx = allBoards.findIndex(
        (board) => board.boardId === boardId
      );
      const targetBoard = allBoards[boardIdx];
      // targetBoard 업데이트
      const updatedTargetBoard = {
        ...targetBoard,
        todos: [...todos, _newTodo],
      };
      // allBoards 업데이트
      const updatedAllBoards = [...allBoards];
      updatedAllBoards.splice(boardIdx, 1, updatedTargetBoard);
      localStorage.setItem("boardsData", JSON.stringify(updatedAllBoards));
      return updatedAllBoards;
    });

    setValue("newTodo", "");
    setAddMode(false);
  };

  return (
    <Draggable
      draggableId={`board-${boardId}`}
      key={`board-${boardId}`}
      index={idx}
    >
      {(boardDraggableProvided, boardDraggableSnapshot) => {
        return (
          <div
            ref={boardDraggableProvided.innerRef}
            {...boardDraggableProvided.draggableProps}
          >
            <Droppable
              droppableId={`todo-${boardId}`}
              key={`todo-${boardId}`}
              type="todo"
            >
              {(provided, snapshot) => (
                <Wrapper
                  isDragging={boardDraggableSnapshot.isDragging}
                  className={
                    boardDraggableSnapshot.isDragging ? "on-drag-board" : ""
                  }
                >
                  {/* <IoCloseSharp onClick={deleteBoard} /> */}

                  <BoardHandle {...boardDraggableProvided.dragHandleProps}>
                    <RxDragHandleDots2 size={26} />
                  </BoardHandle>

                  <Title>{boardName}</Title>

                  <Area
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                    isDraggingFrom={Boolean(snapshot.draggingFromThisWith)}
                  >
                    {todos.map((todo, idx) => (
                      <Card key={todo.id} todo={todo} idx={idx} />
                    ))}

                    {provided.placeholder}
                    {addMode ? (
                      <AddCardStyle>
                        <form onSubmit={handleSubmit(onValid)}>
                          <input
                            {...register("newTodo")}
                            placeholder={`할 일 추가`}
                          />
                          <div>
                            <OkBtn onClick={handleSubmit(onValid)} />
                            <CancelBtn onClick={cancelAdd} />
                          </div>
                        </form>
                      </AddCardStyle>
                    ) : (
                      <AddBtn onClick={addCard} />
                    )}
                  </Area>
                </Wrapper>
              )}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
};
