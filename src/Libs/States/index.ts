import quizes from "@/data/quizes"
import QuizState, { quest } from "./QuizState"
import ViewsState from "./ViewsState"

export type InitialState = {
    views : typeof ViewsState,
    quizes: typeof quizes,
    quiz_state: typeof QuizState
}

const InitialState: InitialState = {
    views : ViewsState,
    quizes: quizes,
    quiz_state: QuizState
    
}

export default InitialState