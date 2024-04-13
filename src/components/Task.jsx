import Checkbox from "./Checkbox";
import { useState } from "react";
export default function Task({ name, done, onToggle, onTrash, onRename }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={`task bg-slate-500 min-w-80  flex mt-2 items-center rounded-lg p-2 gap-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-sky-800 duration-300 ${done ? "line-through decoration-2 decoration-sky-400 opacity-40" : ""}`}>
      <Checkbox
        checked={done}
        onClick={() => onToggle(!done)}
      />
      {!editMode && (
        <div onClick={() => setEditMode((prev) => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditMode(false);
          }}>
          <input
            type="text"
            className="bg-transparent border rounded-md p-2 border-transparent"
            value={name}
            onChange={(e) => onRename(e.target.value)}
          />
        </form>
      )}
      <button
        className="trash ml-auto"
        onClick={onTrash}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            className="fill-sky-200 hover:fill-sky-500"
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </button>
    </div>
  );
}
