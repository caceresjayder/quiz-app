"use client";
import Quiz from "@/components/Quiz";
import QuizSelection from "@/components/QuizSelection";
import { useContext } from "react";
import Context from "@/Libs/Store";
import AppContext from "@/Libs/Context";
import Landing from "@/components/Landing";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const { state } = useContext(Context);

  return (
      <main className="w-full">
        <div className="max-w-3xl min-h-screen border mx-auto">
          {state.views.view === "quiz" && <Quiz />}
          {state.views.view === "select-quiz" && <QuizSelection />}
          {state.views.view === 'landing' && <Landing/>}
          {state.views.view === 'contact' && <ContactForm/>}
        </div>
      </main>
  );
}
