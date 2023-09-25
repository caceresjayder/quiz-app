import React, {useContext} from 'react'
import Context from '@/Libs/Store'
import { ViewsReducerTypes } from '@/Libs/Reducers/ViewsReducer';

function ContactForm() {
  const { dispatch } = useContext(Context);
    const handleEmail = (e: any) => {
        e.preventDefault()
        setTimeout(() => {
              dispatch({
                type: ViewsReducerTypes.SET_VIEW,
                payload: { view: "landing" },
              })}, 2000)
    }
  return (
    <div className="h-fit w-full">
      <form className="flex flex-col gap-2 w-fit h-fit mx-auto mt-4 border border-neutral-400 pb-4 rounded-lg  justify-center" onSubmit={handleEmail}>
        <h1 className="w-full h-16 bg-neutral-600 text-white p-4 rounded-t-lg text-lg font-bold">
          Contact Me
        </h1>

        <label className="flex flex-col w-72 mx-8">
          Nome
          <input
            type="text"
            name="name"
            id="contact-name"
            className="rounded"
            required
          />
        </label>
        <label className="flex flex-col w-72 mx-8">
          E-Mail
          <input
            type="email"
            name="email"
            id="contact-email"
            className="rounded"
            required
          />
        </label>
        <label className="flex flex-col w-72 mx-8">
          Assunto
          <input
            type="text"
            name="subject"
            id="contact-subject"
            className="rounded"
            required
          />
        </label>
        <label className="flex flex-col w-96 mx-8">
          Conteudo
          <textarea cols={24} rows={6} className="rounded" required></textarea>
        </label>
        <div className='flex justify-between px-8'>
          <button
            type='button'
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
          <button
            type="submit"
            className="btn btn-accent hover:scale-105 transition-all"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm