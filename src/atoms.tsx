import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

export interface IBoard {
  boardId: number;
  boardName: string;
  todos: ITodo[];
}

export const todoState = atom<IBoard[]>({
  key: "todo",
  default: [
    { boardId: 0, boardName: "할일", todos: [] },
    { boardId: 1, boardName: "진행중", todos: [] },
    { boardId: 2, boardName: "완료", todos: [] },
  ],
});
