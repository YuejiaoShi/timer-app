import { type Timer as TimerProps } from "../store/timer-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>TODO: TIMER NAME</h2>
    </Container>
  );
}
