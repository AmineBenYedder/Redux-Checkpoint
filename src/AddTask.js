import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/Actions";

const AddTask = () => {
  let [input, setText] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: Math.random(), text:input, isDone: false }));
    setText("");
  };
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} value={input} />
      <button onClick={add}>Add</button>
    </div>
  );
};
export default AddTask;