import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { IBoard, lastBoardIdState, todoState } from "../../atoms";
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
  const [lastBoardId, setLastBoardId] = useRecoilState(lastBoardIdState);
  const [addBoardMode, setAddBoardMode] = useState(false);
  const { setValue, register, handleSubmit } = useForm<IBoardForm>();

  useEffect(() => {
    const boardsData = localStorage.getItem("boardsData");
    if (!boardsData) return;
    setBoards(JSON.parse(boardsData));

    const lastBoardIdData = localStorage.getItem("lastBoardIdData");
    if (!lastBoardIdData) return;
    setLastBoardId(Number(lastBoardIdData));
  }, []);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    // 쓰레기통으로 이동
    if (destination.droppableId === "trashCan") {
      setBoards((allBoards) => {
        const copyAllBoards = [...allBoards];

        const targetBoardIdx = copyAllBoards.findIndex(
          (board) => String(board.boardId) === source.droppableId
        );

        const targetBoard = { ...copyAllBoards[targetBoardIdx] };
        const targetBoardTodos = [...targetBoard.todos];
        targetBoardTodos.splice(source.index, 1);
        targetBoard.todos = targetBoardTodos;
        copyAllBoards[targetBoardIdx] = targetBoard;
        localStorage.setItem("boardsData", JSON.stringify(copyAllBoards));
        return copyAllBoards;
      });
      return;
    } else {
      setBoards((allBoards) => {
        // 보드 내 이동
        if (source.droppableId === destination.droppableId) {
          const copyAllBoards = [...allBoards];
          // 현재 보드의 idx를 찾아야 함
          const targetBoardIdx = copyAllBoards.findIndex(
            (board) => String(board.boardId) === source.droppableId
          );

          // 현재보드의 투두에 들어있는 값들을 복사
          const targetBoard = { ...copyAllBoards[targetBoardIdx] };
          const targetBoardTodos = [...targetBoard.todos];
          const task = targetBoardTodos[source.index]; // 현재 잡고있는 todo
          // todo 순서바꾸기
          targetBoardTodos.splice(source.index, 1);
          targetBoardTodos.splice(destination.index, 0, task);

          targetBoard.todos = targetBoardTodos;
          copyAllBoards[targetBoardIdx] = targetBoard;
          localStorage.setItem("boardsData", JSON.stringify(copyAllBoards));
          return copyAllBoards;
        }

        // 보드 간 이동
        const copyAllBoards = [...allBoards];

        const startBoardIdx = copyAllBoards.findIndex(
          (board) => String(board.boardId) === source.droppableId
        );

        const endBoardIdx = copyAllBoards.findIndex(
          (board) => String(board.boardId) === destination.droppableId
        );

        const startBoard = { ...copyAllBoards[startBoardIdx] };
        const endBoard = { ...copyAllBoards[endBoardIdx] };

        const startBoardTodos = [...startBoard.todos];
        const endBoardTodos = [...endBoard.todos];

        // 현재 잡고있는 todo
        const task = startBoardTodos[source.index];

        // 시작보드에서 todo 삭제
        startBoardTodos.splice(source.index, 1);
        startBoard.todos = startBoardTodos;

        // 종료보드에 todo 추가
        endBoardTodos.splice(destination.index, 0, task);
        endBoard.todos = endBoardTodos;

        copyAllBoards[startBoardIdx] = startBoard;
        copyAllBoards[endBoardIdx] = endBoard;

        localStorage.setItem("boardsData", JSON.stringify(copyAllBoards));
        return copyAllBoards;
      });
    }
  };

  const onValid = ({ boardName }: IBoardForm) => {
    // atom에 보드 추가하기
    setBoards((allBoards) => {
      const newBoard: IBoard = {
        boardId: lastBoardId + 1,
        boardName: boardName,
        todos: [],
      };
      const addedboards = [...allBoards, newBoard];
      // 로컬스토리지에도 추가
      localStorage.setItem("boardsData", JSON.stringify(addedboards));
      return addedboards;
    });
    setLastBoardId((lastBoardId) => {
      localStorage.setItem("lastBoardIdData", String(lastBoardId + 1));
      return lastBoardId + 1;
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
