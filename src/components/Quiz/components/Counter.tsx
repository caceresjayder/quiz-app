import React, { useContext} from 'react'
import dayjs from 'dayjs';
import relativetime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration'
import Countdown from "react-countdown";
import Context from '@/Libs/Store';
import { QuizReducerTypes } from '@/Libs/Reducers/QuizReducer';

dayjs.extend(relativetime)
dayjs.extend(duration);


function Counter() {
  const {dispatch} = useContext(Context)
const style = {
  "--value": 100,
  "--size": "6rem",
  "--thickness": "2px",
} as React.CSSProperties;

  // ...
  return (
    <div
      className="radial-progress bg-green-400 text-white border-4 border-green-400"
      style={style}
    >
      <Countdown
        date={Date.now() + 119000}
        onComplete={() => dispatch({ type: QuizReducerTypes.SET_LOOSE })}
        renderer={(props) => <div>{props.minutes}:{props.seconds}</div>}
        zeroPadTime={2}
      />
    </div>
  );
}

export default Counter