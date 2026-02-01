import TodoApp from "./components/TodoApp";
import UserForm from "./components/UserForm";
import ProgressSystem from "./components/ProgressSystem";
import CountdownTimer from "./components/CountdownTimer";
import SearchList from "./components/SearchList";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Assignment</h1>
      <TodoApp />
      <UserForm />
      <ProgressSystem />
      <CountdownTimer />
      <SearchList />
    </div>
  );
}
