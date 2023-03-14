import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);

  console.log("State", select);

  if (select.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>FETCH-API-TODOS</button>
      {select?.todo?.data?.map((e) => (
        <li>{e.body}</li>
      ))}
    </div>
  );
}

export default App;
