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

function reducer(action, payload) {}

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
