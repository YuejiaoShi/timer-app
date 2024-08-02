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

type Action = {
  type: "Add_Timer" | "Start_Timers" | "Stop_Timers";
};

function reducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "Start_Timers":
      return { ...state, isRunning: true };
    case "Stop_Timers":
      return { ...state, isRunning: false };
    case "Add_Timer":
      return { ...state, timers:[...state.timers,{name:,duration:}]  };
  }
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //
    },
    startTimers() {
      //
    },
    stopTimers() {
      //
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
