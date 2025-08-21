import type { TaskModel } from './Taskmodel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  curremtCycle: number; // 1 a 8
  config: {
    workTime: number; // em minutos
    shortBreakTime: number; // em minutos
    longBreakTime: number; // em minutos
  };
};
