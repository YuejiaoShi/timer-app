import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timer-context.tsx";

export default function Header() {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersContext.isRunning
            ? timersContext.stopTimers
            : timersContext.startTimers
        }
      >
        {timersContext.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
