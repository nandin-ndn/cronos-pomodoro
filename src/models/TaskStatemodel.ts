import type { TaskModel } from './Taskmodel';

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, MainForm
  secondsRemaining: number; // Countdown, historico, MainForm, Button
  formattedSecondsRemaining: string; // Titulo, Countdown
  activeTask: TaskModel | null; // Countdown, historico, MainForm, Button
  curremtCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
