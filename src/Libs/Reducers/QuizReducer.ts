import quizes from "@/data/quizes";
import QuizState, { quest } from "../States/QuizState";
import { ViewsReducerActions } from "./ViewsReducer";
import InitialState from "../States";

export type QuizReducerActions =
  | {
      type: QuizReducerTypes.SET_QUIZ;
      payload: {
        quest: quest;
        quest_idx: number;
      };
    }
  | {
      type: QuizReducerTypes.SET_WIN;
    }
  | {
      type: QuizReducerTypes.SET_LOOSE;
    }
  | {
      type: QuizReducerTypes.SET_ACTUAL_CICLE;
      payload: {
        cicleIdx: number;
      };
    }
  | {
      type: QuizReducerTypes.SET_ACTUAL_QUEST;
      payload: {
        questIdx: number;
      };
    }
  | {
      type: QuizReducerTypes.SET_TABLE_VALUE;
      payload: {
        column: string;
        value: string;
        ciclo: 1 | 2 | 3 | 4;
      };
    }
  | {
      type: QuizReducerTypes.RESET;
    }
  | {
      type: QuizReducerTypes.RESTART;
      payload: {
        quest_idx: number
      };
    };

export enum QuizReducerTypes {
  SET_QUIZ = "SET_QUIZ",
  SET_WIN = "SET_WIN",
  SET_LOOSE = "SET_LOOSE",
  SET_ACTUAL_CICLE = "SET_ACTUAL_CICLE",
  SET_ACTUAL_QUEST = "SET_ACTUAL_QUEST",
  SET_TABLE_VALUE = "SET_TABLE_VALUE",
  RESET = "RESET",
  RESTART = "RESTART",
}


const QuizReducer = (state: typeof QuizState, action: QuizReducerActions | ViewsReducerActions): typeof QuizState => {
    switch(action.type){
        case QuizReducerTypes.SET_QUIZ:
            return {
              ...state,
              quest: action.payload.quest,
              quest_idx : action.payload.quest_idx
            };
        case QuizReducerTypes.SET_ACTUAL_CICLE:
            return {
                ...state,
                ciclo_actual: action.payload.cicleIdx
            }
        case QuizReducerTypes.SET_ACTUAL_QUEST:
            return {
                ...state,
                quiz_actual: action.payload.questIdx
            }
        case QuizReducerTypes.SET_TABLE_VALUE:
            const {column, value, ciclo} = action.payload
            return {
                ...state,
                table: {
                  ...state.table,
                  [ciclo] : {
                    ...state.table[ciclo],
                    Ciclo : ciclo,
                    [column] : value
                  }
                }
            }
        case QuizReducerTypes.SET_LOOSE:
            return {
                ...state,
                loose: !state.loose
            }
        case QuizReducerTypes.SET_WIN:
            return {
                ...state,
                win: !state.win
            }
        case QuizReducerTypes.RESTART:
          return {
            ...QuizState,
            quest_idx: action.payload.quest_idx,
            quest: quizes[action.payload.quest_idx] as any,
          };
        case QuizReducerTypes.RESET:
          return QuizState
        default: return state
    }
}

export default QuizReducer;