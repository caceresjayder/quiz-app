import React, { FormEvent, useContext, useEffect, useState } from "react";
import Table from "./components/Table";
import Context from "@/Libs/Store";
import { QuizReducerTypes } from "@/Libs/Reducers/QuizReducer";
import LR from "@/assets/LR.jpeg";
import TV from "@/assets/TV.jpeg";
import FV from "@/assets/FV.png";
import AE from "@/assets/AE.png";
import Image from "next/image";
import Modal from "./components/Modal";
import { ViewsReducerTypes } from "@/Libs/Reducers/ViewsReducer";
import Counter from "./components/Counter";

const Quiz = () => {
  const { state, dispatch } = useContext(Context);
  const { ciclo_actual, loose, win, quest, quiz_actual, table, quest_idx } =
    state.quiz_state;
  const { ciclos, name, description } = quest;
  const { questions } = ciclos[ciclo_actual];
  const { question, options, correct, table_values, ritmo, timer } =
    questions[quiz_actual];


    useEffect(() => {
      if (timer && timer === "continue") {
        return;
      } else if (timer) {
        const newDeadline = Date.now() + timer * 1000;
        dispatch({
          type: QuizReducerTypes.SET_COUNTDOWN,
          payload: { countdown: newDeadline },
        });
      } else {
        dispatch({
          type: QuizReducerTypes.SET_COUNTDOWN,
          payload: { countdown: null },
        });
      }
    }, [timer, dispatch]);

  const setCicle = () => {
    if (ciclos.length - 1 === ciclo_actual) {
      dispatch({ type: QuizReducerTypes.SET_WIN });
    } else {
      dispatch({
        type: QuizReducerTypes.SET_ACTUAL_QUEST,
        payload: { questIdx: 0 },
      });
      dispatch({
        type: QuizReducerTypes.SET_ACTUAL_CICLE,
        payload: { cicleIdx: ciclo_actual + 1 },
      });
    }
  };

  const setQuizActual = () => {
    if (questions.length - 1 === quiz_actual) {
      setCicle();
    } else {
      dispatch({
        type: QuizReducerTypes.SET_ACTUAL_QUEST,
        payload: { questIdx: quiz_actual + 1 },
      });
    }
  };

  const handleResponse = (e: any) => {
    e.preventDefault();
    e.currentTarget.blur();
    const response = e.currentTarget.elements.response.value;
    if (!response) return;
    if (response === correct) {
      setQuizActual();
      dispatch({
        type: QuizReducerTypes.SET_TABLE_VALUE,
        payload: {
          table_values: table_values,
          ciclo: ciclo_actual + 1,
        },
      });
    } else {
      dispatch({ type: QuizReducerTypes.SET_LOOSE });
    }
  };

  return (
    <div className="">
      <div className="w-full bg-accent h-16 mb-4 p-4 flex items-center">
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      <div className="h-fit px-4">
        <div className="w-full h-32 flex justify-between mb-4">
          <div className="w-full bg-accent rounded flex justify-between items-center">
            <h2 className="text-center w-3/4 font-bold text-green-900">
              {question}
            </h2>
            <div className="relative h-full w-2/4 rounded">
              {questions[quiz_actual].ritmo === "LR" && (
                <Image
                  src={LR}
                  alt="Cardio Imagen"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-e hover:scale-150 transition-all hover:z-10"
                />
              )}
              {questions[quiz_actual].ritmo === "TV" && (
                <Image
                  src={TV}
                  alt="Cardio Imagen"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-e hover:scale-150 transition-all hover:z-10"
                />
              )}
              {questions[quiz_actual].ritmo === "AE" && (
                <Image
                  src={AE}
                  alt="Cardio Imagen"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-e hover:scale-150 transition-all hover:z-10"
                />
              )}
              {questions[quiz_actual].ritmo === "FV" && (
                <Image
                  src={FV}
                  alt="Cardio Imagen"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-e hover:scale-150 transition-all hover:z-10"
                />
              )}
            </div>
          </div>
            <Counter />
        </div>

        <form
          id="options-form"
          onSubmit={(e) => handleResponse(e)}
          className="border rounded-lg mx-2 h-fit flex justify-evenly p-4 mb-4"
        >
          {options
            .sort(() => Math.random() - 0.5)
            .map((option, index) => {
              return (
                <label
                  key={option + index}
                  htmlFor={`response-${option}`}
                  className="flex flex-col items-center w-1/3 text-center"
                >
                  <input
                    type="radio"
                    form="options-form"
                    name="response"
                    id={`response-${option}`}
                    value={option}
                    className="radio radio-success"
                  />
                  {option}
                </label>
              );
            })}
        </form>
        <div className="flex items-center justify-between px-2 my-4">
          <button
            className="btn btn-accent flex gap-2"
            onClick={() => {
              dispatch({
                type: ViewsReducerTypes.SET_VIEW,
                payload: { view: "select-quiz" },
              });
              dispatch({
                type: QuizReducerTypes.RESET,
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Voltar
          </button>
          <button
            className="btn btn-accent flex gap-2"
            onClick={() =>
              dispatch({
                type: QuizReducerTypes.RESTART,
                payload: { quest_idx: quest_idx },
              })
            }
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Reiniciar
          </button>
          <button className="btn btn-accent" type="submit" form="options-form">
            Enviar
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <Table />
        </div>
      </div>
      <Modal loose={loose} win={win} correct={correct} quest_idx={quest_idx} />
    </div>
  );
};

export default Quiz;
