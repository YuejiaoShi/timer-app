import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timer-context.tsx";

export default function Header() {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
