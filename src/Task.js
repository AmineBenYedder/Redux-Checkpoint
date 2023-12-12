import { useDispatch } from "react-redux";
import { isComplete ,deleteTodo } from "./Redux/Actions"
import { EditTodo } from "./EditTodo";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const change = () => {
    dispatch(isComplete(el.id));
  };
console.log(el.text,"testtttttt")
  const dynamicStyle = {
    color: el.IsDone && "green",
  };
  return (
    <div>
      <h1 style={dynamicStyle}>{el.text}</h1>

      <button
        onClick={() => {
          dispatch(deleteTodo(el.id)) }} >remove</button>
      <button onClick={change}>isDone</button>
      <EditTodo el={el} />

    </div>
  );
};
export default Task;