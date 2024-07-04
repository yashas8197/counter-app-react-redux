import "./App.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("minus")}>minus</button>
    </main>
  );
}
