import { Home } from './pages/Home';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { NotFound } from './pages/NotFound';

import './styles/theme.css';
import './styles/global.css';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formattedSecondsRemaining: string;
//   activeTask: TaskModel | null;
//   currentCycle: number;
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '05:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
