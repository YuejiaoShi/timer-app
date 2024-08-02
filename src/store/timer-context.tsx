import { createContext, ReactNode, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);
export function useTimersContext() {
  const timersContext = useContext(TimersContext);
  if (timersContext === null) {
    throw new Error(
      "TimersContext is undefined. Make sure you are using it within a TimersProvider."
    );
  }
  return timersContext;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "Start_Timers";
};
type StopTimersAction = {
  type: "Stop_Timers";
};
type AddTimerAction = {
  type: "Add_Timer";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function reducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "Start_Timers":
      return { ...state, isRunning: true };
    case "Stop_Timers":
      return { ...state, isRunning: false };
    case "Add_Timer":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "Add_Timer", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "Start_Timers" });
    },
    stopTimers() {
      dispatch({ type: "Stop_Timers" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
