import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { todoState } from "../../atoms";
import {
  AddBoardBtn,
  AddBoardForm,
  AddBoardLabel,
  BoardPlaceholder,
  Boards,
  Wrapper,
} from "./styles";
import { Board } from "../../components/Board/Board";
import { TrashCan } from "../../components/TrashCan/TrashCan";
import { CancelBtn, OkBtn } from "../../components/Board/styles";
import { useForm } from "react-hook-form";

interface IBoardForm {
  boardName: string;
}

export const Trello = () => {
  const [boards, setBoards] = useRecoilState(todoState);
  const [addBoardMode, setAddBoardMode] = useState(false);
  const { setValue, register, handleSubmit } = useForm<IBoardForm>();

  useEffect(() => {
    const boardsData = localStorage.getItem("boardsData");
    if (!boardsData) return;
    setBoards(JSON.parse(boardsData));
  }, []);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    // 쓰레기통으로 이동
    // if (destination.droppableId === "trashCan") {
    //   setBoards((allBoards) => {
    //     const board = [...allBoards[source.index]];
    //     board.splice(source.index, 1);
    //     const deletedBoardData = { ...allBoards, [source.droppableId]: board };
    //     localStorage.setItem("boardsData", JSON.stringify(deletedBoardData));
    //     return deletedBoardData;
    //   });
    //   return;
    // } else
    {
      setBoards((allBoards) => {
        // 보드 내 이동
        if (source.droppableId === destination.droppableId) {
          const copyAllBoards = [...allBoards];
          // 현재 보드의 idx를 찾아야 함
          const targetBoardIdx = copyAllBoards.findIndex(
            (board) => board.boardName === source.droppableId
          );

          // 현재보드의 투두에 들어있는 값들을 복사
          const targetBoard = { ...copyAllBoards[targetBoardIdx] };
          const targetBoardTodos = [...targetBoard.todos];
          const task = targetBoardTodos[source.index]; // 현재 잡고있는 todo
          // todo 순서바꾸기
          targetBoardTodos.splice(source.index, 1);
          targetBoardTodos.splice(destination.index, 0, task);

          targetBoard.todos = targetBoardTodos;
          copyAllBoards.splice(targetBoardIdx, 1, targetBoard);
          localStorage.setItem("boardsData", JSON.stringify(copyAllBoards));
          return copyAllBoards;
        }
        // 보드 간 이동
        // const sourceBoard = [...allBoards[source.droppableId]]; // 출발배열
        // const destBoard = [...allBoards[destination.droppableId]]; // 도착배열
        // const task = sourceBoard[source.index];
        // sourceBoard.splice(source.index, 1); // 원래보드에 선택된 카드 삭제
        // destBoard.splice(destination.index, 0, task); // 옮긴 보드에 카드 추가
        // const editedBoardData = {
        //   ...allBoards,
        //   [destination.droppableId]: destBoard,
        //   [source.droppableId]: sourceBoard,
        // };
        // localStorage.setItem("boardsData", JSON.stringify(editedBoardData));
        // return editedBoardData;
      });
    }
  };

  const onValid = ({ boardName }: IBoardForm) => {
    // atom에 보드 추가하기
    setBoards((boards) => {
      const addedboards = { ...boards, [boardName]: [] };
      // 로컬스토리지에도 추가
      localStorage.setItem("boardsData", JSON.stringify(addedboards));
      return addedboards;
    });
    cancelAddBoard();
  };

  const cancelAddBoard = () => {
    setValue("boardName", "");
    setAddBoardMode(false);
  };

  const addBoard = () => {
    setAddBoardMode(true);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {boards.map((boardInfo) => (
            <Board key={boardInfo.boardId} boardInfo={boardInfo} />
          ))}

          {addBoardMode ? (
            <BoardPlaceholder isAdding={true}>
              <AddBoardForm onSubmit={handleSubmit(onValid)}>
                <AddBoardLabel>보드 추가</AddBoardLabel>
                <input
                  placeholder={`보드 이름을 입력하세요`}
                  {...register("boardName")}
                />
                <div className="btn-wrap">
                  <OkBtn onClick={handleSubmit(onValid)} />
                  <CancelBtn onClick={cancelAddBoard} />
                </div>
              </AddBoardForm>
            </BoardPlaceholder>
          ) : (
            <BoardPlaceholder onClick={addBoard}>
              <AddBoardBtn />
            </BoardPlaceholder>
          )}
        </Boards>
        <TrashCan />
      </Wrapper>
    </DragDropContext>
  );
};
