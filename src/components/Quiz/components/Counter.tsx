import React, { useContext, useEffect, useMemo, useState} from 'react'
import dayjs from 'dayjs';
import relativetime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration'
import Countdown from "react-countdown";
import Context from '@/Libs/Store';
import { QuizReducerTypes } from '@/Libs/Reducers/QuizReducer';

dayjs.extend(relativetime)
dayjs.extend(duration);


function Counter() {
  const {dispatch, state} = useContext(Context)
  const { ciclo_actual, quest, quiz_actual, loose, win, countdown } =
    state.quiz_state;
  const { ciclos } = quest;
  const { questions } = ciclos[ciclo_actual];
  const { timer } =
    questions[quiz_actual];


const style = {
  "--value": 100,
  "--size": "6rem",
  "--thickness": "2px",
} as React.CSSProperties;


  if(countdown && !loose && !win){
      return (
        <Countdown
          date={countdown}
          precision={3}
          onComplete={() => dispatch({ type: QuizReducerTypes.SET_LOOSE })}
          renderer={(props) => (
            <div>
              <div
                className={`radial-progress ${
                  //@ts-ignore
                  props.total < (+timer > 10 ? 30000 : 5000)
                    ? "bg-red-400 border-red-400 vibrate-1"
                    : "bg-green-400 border-green-400"
                }  text-white border-4`}
                style={style}
              >
                {props.minutes}:{props.seconds}
              </div>
            </div>
          )}
          zeroPadTime={2}
        />
      );
  }
}

export default Counter