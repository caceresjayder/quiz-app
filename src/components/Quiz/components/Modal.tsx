import React, {useContext, useEffect, useRef} from 'react'
import Table from './Table'
import Context from '@/Libs/Store'
import { QuizReducerTypes } from '@/Libs/Reducers/QuizReducer'
import { ViewsReducerTypes } from '@/Libs/Reducers/ViewsReducer'

function Modal({win, loose, correct, quest_idx} : {win:boolean, loose: boolean, correct?: string, quest_idx: number}) {
    const modalRef = useRef<any>(null)
    const {dispatch} = useContext(Context)

    const handleClose = () => {
        dispatch({type: ViewsReducerTypes.SET_VIEW, payload: {view: 'select-quiz'}})
        dispatch({type: QuizReducerTypes.RESET})
    }

    useEffect(() => {
        if(win || loose){
            if(modalRef.current){
                modalRef.current.showModal();
            }
        }
        
    }, [win, loose])
    
  return (
    <div>
      <dialog
        id="my_modal_5"
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {win && (
            <div className="text-green-500 text-center w-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              <p className="text-lg font-bold">PARABÉNS, O PACIENTE VOLTOU</p>
            </div>
          )}
          {loose && (
            <div className="text-red-500 text-center w-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-40 h-40"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="flex flex-col items-center justify-center">
                <span className="text-lg font-bold">
                  ESTAVA TUDO INDO BEM, MAS AGORA ACONTECEU UM ERRO GRAVE.
                </span>
                <span className="text-neutral-800">
                  A resposta correta seria: {correct}
                </span>
              </p>
            </div>
          )}
          <p className="font-bold text-green-500">Esse é seu relatório.</p>
          <Table />
            <div className="modal-action my-2">
              <form method="dialog" className='flex gap-2'>
            <button className="btn btn-accent" onClick={() => dispatch({type: QuizReducerTypes.RESTART, payload: {quest_idx: quest_idx}})}>
              Restart
            </button>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-accent" onClick={handleClose}>
                  Close
                </button>
              </form>
            </div>
          </div>
      </dialog>
    </div>
  );
}

export default Modal