import { Dispatch, SetStateAction } from "react";
import { IBoard } from "../../atoms";

export interface IForm {
  newTodo: string;
}

export interface IBoardProps {
  boardInfo: IBoard;
  idx: number;
  setIsTrashOn: Dispatch<SetStateAction<boolean>>;
}
