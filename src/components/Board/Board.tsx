import { Droppable } from "react-beautiful-dnd";
import { Card } from "../Card/Card";
import { useForm } from "react-hook-form";
import { ITodo, todoState } from "../../atoms";
import { useSetRecoilState } from "recoil";
import {
  AddBtn,
  AddCardStyle,
  Area,
  CancelBtn,
  OkBtn,
  Title,
  Wrapper,
} from "./styles";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface IForm {
  newTodo: string;
}

interface IBoardProps {
  todos: ITodo[];
  boardName: string;
}

export const Board = ({ todos, boardName }: IBoardProps) => {
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

  const deleteBoard = () => {
    // atom에서 해당 보드 삭제
    setTodo((boards) => {
      const copyBoards = { ...boards };
      delete copyBoards[boardName];
      // 로컬스토리지 업데이트
      localStorage.setItem("boardsData", JSON.stringify(copyBoards));

      return copyBoards;
    });
  };

  const onValid = ({ newTodo }: IForm) => {
    const _newTodo = {
      id: Date.now(),
      text: newTodo,
    };

    setTodo((allBoards) => {
      const addedBoardsData = {
        ...allBoards,
        [boardName]: [...allBoards[boardName], _newTodo],
      };
      localStorage.setItem("boardsData", JSON.stringify(addedBoardsData));
      return addedBoardsData;
    });

    setValue("newTodo", "");
    setAddMode(false);
  };
  return (
    <Droppable droppableId={boardName} key={boardName}>
      {(provided, snapshot) => (
        <Wrapper>
          <IoCloseSharp onClick={deleteBoard} />
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
                  <input {...register("newTodo")} placeholder={`할 일 추가`} />
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
  );
};
