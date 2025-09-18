import { use } from "react";
import Task from "./Task";

export default function Task3({ tasksPromise }) {
  const task3 = use(tasksPromise);

  return (
    <div className="card">
      <h4>All users: {task3.length}</h4>
      {task3.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </div>
  );
}
