import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { todoState } from "../../atoms";
import { Boards, Wrapper } from "./styles";
import { Board } from "../../components/Boards/Board";
import { TrashCan } from "../../components/TrashCan/TrashCan";

export const Trello = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  useEffect(() => {
    const boardsData = localStorage.getItem("boardsData");
    if (!boardsData) return;
    setTodos(JSON.parse(boardsData));
  }, []);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    // 쓰레기통으로 이동
    if (destination.droppableId === "trashCan") {
      setTodos((allBoards) => {
        const board = [...allBoards[source.droppableId]];
        board.splice(source.index, 1);
        const deletedBoardData = { ...allBoards, [source.droppableId]: board };
        localStorage.setItem("boardsData", JSON.stringify(deletedBoardData));
        return deletedBoardData;
      });
      return;
    } else {
      // 보드 내 이동
      setTodos((allBoards) => {
        // 같은 보드 내에서 이동시
        if (source.droppableId === destination.droppableId) {
          const board = [...allBoards[source.droppableId]];
          const task = board[source.index];
          board.splice(source.index, 1);
          board.splice(destination.index, 0, task);

          const editedBoardData = { ...allBoards, [source.droppableId]: board };
          localStorage.setItem("boardsData", JSON.stringify(editedBoardData));
          return editedBoardData;
        }

        const sourceBoard = [...allBoards[source.droppableId]]; // 출발배열
        const destBoard = [...allBoards[destination.droppableId]]; // 도착배열
        const task = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1); // 원래보드에 선택된 카드 삭제
        destBoard.splice(destination.index, 0, task); // 옮긴 보드에 카드 추가

        const editedBoardData = {
          ...allBoards,
          [destination.droppableId]: destBoard,
          [source.droppableId]: sourceBoard,
        };
        localStorage.setItem("boardsData", JSON.stringify(editedBoardData));
        return editedBoardData;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(todos).map((boardName) => (
            <Board
              key={boardName}
              boardName={boardName}
              todos={todos[boardName]}
            />
          ))}
        </Boards>
        <TrashCan />
      </Wrapper>
    </DragDropContext>
  );
};
