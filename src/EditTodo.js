import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { EditTask } from "./Redux/Actions";

export const EditTodo = ({ el }) => {
  const [open, SetOpen] = useState(false);
  const [textt, SetTextt] = useState(el.text);
  const Dispatch = useDispatch();
  const HandleEdit = () => {
    Dispatch(EditTask({ id: el.id, text: textt, isDone: el.isDone }));
    handleshow();
  };
  const handleshow = () => {
    SetOpen(!open);
  };
  return (
    <>
      <button onClick={handleshow}>Edit me</button>
      <ReactModal isOpen={open}>
        <input value={textt} onChange={(e) => SetTextt(e.target.value)} />
        <button onClick={HandleEdit}>Submit</button>
        <button onClick={handleshow}>Close</button>
      </ReactModal>
    </>
  );
};