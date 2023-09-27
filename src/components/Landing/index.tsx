import ViewsReducer, { ViewsReducerTypes } from '@/Libs/Reducers/ViewsReducer';
import Context from '@/Libs/Store';
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import ProfilePic from '@/assets/profile-pic3.png'
import CoursePhoto from '@/assets/image.png'
import Head from 'next/head';

function Landing() {
    const {dispatch} = useContext(Context)
    useEffect(() => {
        const isFirstTime = localStorage.getItem("first-time");
        if(isFirstTime === null) localStorage.setItem('first-time', 'false')
    }, [])
  return (
    <>
      <Head>
        <title>Electrocardiograma Quiz App by Dr. Jose Alencar</title>
        <meta
          name="description"
          content="O ACLS É UM CURSO SOBRE SEQUÊNCIAS. E este é um simulador da sequência
          de atendimento em alguns casos clínicos diferentes. Aperte play para
          jogar."
        />
      </Head>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="rounded-lg border border-green-400 mx-12 my-4 p-8 flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold bg-green-300 p-4 rounded-lg text-green-800">
            ACLS SIMULATOR
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-28 h-28 text-red-500 drop-shadow-xl heartbeat"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
        <section className="flex items-center w-full justify-center">
          <p className="w-3/4 indent-8 break-words text-justify font-semibold">
            O ACLS É UM CURSO SOBRE SEQUÊNCIAS. E este é um simulador da
            sequência de atendimento em alguns casos clínicos diferentes. Aperte
            play para jogar.
          </p>
        </section>
        <div className="flex gap-2 my-2">
          {/* <button
            className="btn btn-accent hover:scale-105 transition-all flex gap-2"
            onClick={() =>
              dispatch({
                type: ViewsReducerTypes.SET_VIEW,
                payload: { view: "contact" },
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Contact
          </button> */}
          <button
            className="btn btn-accent hover:scale-105 transition-all flex gap-2"
            onClick={() =>
              dispatch({
                type: ViewsReducerTypes.SET_VIEW,
                payload: { view: "select-quiz" },
              })
            }
          >
            Play
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
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </button>
        </div>
        <div id="banners" className="w-full flex flex-col p-8 sm:p-4 gap-4">
          <div className="card sm:card-side w-full bg-base-100 shadow-xl hover:scale-110 transition-all duration-500 hover:z-10">
            <figure className="relative h-72 sm:h-52 w-full sm:w-72">
              <Image
                src={CoursePhoto}
                fill
                style={{ objectFit: "fill" }}
                sizes="(min-width: 808px) 50vw, 100vw"
                priority={true}
                alt="front of course image"
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-md">
                Curso de Electrocardiograma com Dr. Jose Alencar
              </h2>
              <p>Online | 30 horas | Certificado</p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-link"
                  target="__blank"
                  href="https://linktr.ee/josenalencar"
                >
                  Perfil dr. Jose Alencar
                </a>
                <a
                  className="btn btn-success"
                  target="__blank"
                  href="https://www.manole.com.br/curso-de-eletrocardiograma-com-jose-alencar/p"
                >
                  Ver mais...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing