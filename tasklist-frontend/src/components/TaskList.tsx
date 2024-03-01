import { useQuery } from "react-query";
import { httpClient } from "../utils/HttpClient";
import { Task } from "../model/TaskModel";

let tasks: Task[] = []; // Declare tasks variable globally scoped
const retrievePosts = async () => {
  const response = await httpClient.get("tasks");
  tasks = response.data.map((task: any) => ({
    status: task.status,
    id: task.id,
    name: task.name,
    priority: task.priority,
    updatedAt: task.updatedAt,
    createdAt: task.createdAt,
  }));
  return tasks;
};

const TaskList = () => {
    const { data: tasks, error, isLoading } = useQuery("tasksData", retrievePosts, {
      refetchInterval: 1000
    });

  if (isLoading) return <div>Fetching tasks...</div>;
  if (error) return <div>An error occurred: error</div>;

  // Rendering task list
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              <div>ID: {task.id}</div>
              <div>Name: {task.name}</div>
              <div>Status: {task.status}</div>
              <div>Priority: {task.priority}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
