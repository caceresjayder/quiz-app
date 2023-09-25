import InitialState from "../States";
import { QuizState } from "../States/QuizState";
import QuizReducer, { QuizReducerActions } from "./QuizReducer";
import ViewsReducer, { ViewsReducerActions } from "./ViewsReducer";


const RootReducer = (
  { quiz_state, views }: typeof InitialState,
  action: QuizReducerActions | ViewsReducerActions
): typeof InitialState => ({
  quiz_state: QuizReducer(quiz_state, action),
  views: ViewsReducer(views, action),
  quizes: InitialState.quizes
});

export default RootReducer