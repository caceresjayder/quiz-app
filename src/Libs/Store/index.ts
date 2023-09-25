import {createContext} from 'react';
import InitialState from '../States';


const Context = createContext<{
  state: typeof InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: InitialState,
  dispatch: () => null,
});

export default Context