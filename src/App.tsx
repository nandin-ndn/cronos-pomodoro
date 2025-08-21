import type { TaskStateModel } from './models/TaskStatemodel';
import { useState } from 'react';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  curremtCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
