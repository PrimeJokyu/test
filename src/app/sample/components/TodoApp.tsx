import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl font-bold">TODOリスト</h2>
      <input
        className="border p-1 w-full mb-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="タスクを入力"
      />
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={addTask}
      >
        追加
      </button>
      <ul className="mt-2">
        {tasks.map((item, index) => (
          <li key={index} className="border-b p-1 flex justify-between">
            {item}{" "}
            <button className="text-red-500" onClick={() => removeTask(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
