import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
    setTasks(initialTasks);
  }, []);
  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask[taskIndex].done = newDone;
      return newTask;
    });
  }

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Ayo mulaii mengerjakan tugasnya ✍️";
    }
    if (percentage === 100) {
      return "Congratulation 🥳, Nice job for today! ❤️‍🔥";
    }
    if (percentage >= 50) {
      return "Ayoo lanjutkan setengah lagii 💪";
    }
    return "Semangattt 🔥";
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-4xl text-white font-bold text-center mb-4">
        {numberComplete}/{numberTotal} Complete
      </h1>
      <h2 className="text-2xl text-white font-bold text-center mb-4">{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onRename={(newName) => renameTask(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
        />
      ))}
    </div>
  );
}

export default App;
