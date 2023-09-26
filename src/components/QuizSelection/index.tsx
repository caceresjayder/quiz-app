import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "@/Libs/Store";
import { QuizReducerTypes } from "@/Libs/Reducers/QuizReducer";
import { ViewsReducerTypes } from "@/Libs/Reducers/ViewsReducer";
import { quest } from "@/Libs/States/QuizState";

function QuizSelection() {
  const { state, dispatch } = useContext(Context);
  const emailModalRef = useRef<HTMLDialogElement | null>(null);
  const emailModalInputRef = useRef<HTMLInputElement | null>(null);
  const [modalEmailSended, setmodalEmailSended] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const select_quiz = (caso: quest, index: number) => {
    dispatch({
      type: QuizReducerTypes.SET_QUIZ,
      payload: { quest: caso, quest_idx: index },
    });
    dispatch({ type: ViewsReducerTypes.SET_VIEW, payload: { view: "quiz" } });
  };

  const getEmail = async () => {
    const emailValidate = /[a-z]+@[a-z]+\.[a-z]{2,3}$/gi;
    if (emailModalInputRef.current) {
      if (emailValidate.test(emailModalInputRef.current.value)) {
        setSendingEmail(true);
        setSendingEmail(true);
        setTimeout(() => {
          setSendingEmail(false);
          setmodalEmailSended(true);
        }, 2000);
        setTimeout(() => {
          localStorage.setItem("first-time", "false");
          if (emailModalRef.current) emailModalRef.current.close();
        }, 4000);
      } else {
        setErrorInput(true);
      }
    }
  };

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first-time");
    if (!emailModalRef.current) return;
    if (isFirstTime === "true") emailModalRef.current.showModal();
  }, []);

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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="email_modal" ref={emailModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Olá antes de começar!</h3>
          <p className="py-4">
            Deixe-nos o seu email para que possa conhecer as nossas formações e
            novidades recentes.
          </p>
          <input
            type="text"
            placeholder="user@example.com"
            ref={emailModalInputRef}
            className={`input input-bordered ${
              errorInput ? "input-error" : "input-primary"
            } w-full max-w-xs`}
          />
          {errorInput && (
            <p className="text-sm text-red-500 px-4 my-2">Email invalido.</p>
          )}
          <div className="modal-action flex">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-info">Close</button>
            </form>
            <button
              type="button"
              onClick={getEmail}
              className={`btn ${modalEmailSended ? "btn-success" : "btn-info"}`}
            >
              {sendingEmail ? (
                <span className="loading loading-spinner loading-sm text-white"></span>
              ) : (
                <>
                  {modalEmailSended ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    "Enviar"
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default QuizSelection;
