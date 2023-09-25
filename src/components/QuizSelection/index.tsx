import React, { useContext } from "react";
import Context from "@/Libs/Store";
import { QuizReducerTypes } from "@/Libs/Reducers/QuizReducer";
import { ViewsReducerTypes } from "@/Libs/Reducers/ViewsReducer";
import { quest } from "@/Libs/States/QuizState";

function QuizSelection() {
  const { state, dispatch } = useContext(Context);

  const select_quiz = (caso: quest, index: number) => {
    dispatch({
      type: QuizReducerTypes.SET_QUIZ,
      payload: { quest: caso, quest_idx: index },
    });
    dispatch({ type: ViewsReducerTypes.SET_VIEW, payload: { view: "quiz" } });
  };
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold h-16 p-4 bg-accent">
        Seleciona um Quiz...
      </h2>
      <div className="flex flex-wrap h-fit justify-center">
        {state.quizes.map((caso: any, index) => {
          return (
            <div
              key={caso.name + index}
              className={`h-40 w-40 p-4 flex flex-col items-center justify-center rounded-lg m-4 bg-accent shadow-lg transition-all hover:shadow-xl hover:scale-110
              ${index === 0 && "roll-in-left"}
              ${index === 1 && "roll-in-top"}
              ${index === 2 && "roll-in-right"}
              ${index === 3 && "roll-in-bottom"}
              `}
              onClick={() => select_quiz(caso, index)}
            >
              <p>{caso.name}</p>
              <p>{caso.description}</p>
            </div>
          );
        })}
      </div>
      <div className="px-8 my-8">
          <button
            className="btn btn-accent flex gap-2"
            onClick={() => {
              dispatch({
                type: ViewsReducerTypes.SET_VIEW,
                payload: { view: "landing" },
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Voltar
          </button>
      </div>
    </div>
  );
}

export default QuizSelection;
