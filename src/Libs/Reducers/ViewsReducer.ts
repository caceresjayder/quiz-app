// import ViewsState from "../States/ViewsState"
import { ViewsState } from "../States/ViewsState"
import { QuizReducerActions } from "./QuizReducer"

export type ViewsReducerActions = {
    type: ViewsReducerTypes.SET_VIEW,
    payload: {
        view: string
    }
}

export enum ViewsReducerTypes {
    SET_VIEW = "SET_VIEW"
}

const ViewsReducer = (state: ViewsState, action: ViewsReducerActions | QuizReducerActions): ViewsState => {
    switch(action.type){
        case ViewsReducerTypes.SET_VIEW:
            return{
                ...state,
                view: action.payload.view
            }
        default: return state
    }
}

export default ViewsReducer