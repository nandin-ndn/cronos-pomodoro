import type { TaskStateModel } from "./TaskStatemodel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // in minutes
  startDate: number;
  CompleteDate: number | null; // quando o timer chegar ao final
  inruptionDate: number | null; // quando o usuário task interromper o timer
  type: keyof TaskStateModel['config'];
    };
;
