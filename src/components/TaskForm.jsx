import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-slate-400 rounded-2xl p-2">
        <button className="bg-sky-400 hover:bg-sky-600 text-white font-bold p-2 rounded-lg mr-3">+</button>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Masukkan Task baru..."
          className="bg-transparent border-none p-2 text-white outline-none "
        />
      </form>
    </main>
  );
}
