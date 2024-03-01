import React from "react";
import { Task } from "../model/TaskModel";
import { httpClient } from "../utils/HttpClient";



export const AddTask = () => {


    const [loading, setLoading] = React.useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const task: Task = {
            name: formData.get("name") as string,
            priority: formData.get("priority") as string,
        };

        try {
            const addedTask = await addTaskFunc(task);
            console.log("Task added:", addedTask);

        } catch (error) {

            console.error("Error adding task:", error);

        }
    };

    const addTaskFunc = async (task: Task) => {
        
        try {setLoading(true);
            const response = await httpClient.post("createtask", task);

// add fake delay to simulate network latency
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setLoading(false);
            return response.data; 

        } catch (error) {
            setLoading(false);
            throw error; // Propagate the error so it can be handled elsewhere
        }
    }

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" />
                </label>
                <label>
                    Priority:
                    <input type="text" name="priority" />
                </label>
                <button type="submit">{loading ? "Adding..." : "Add"}</button>
            </form>
        </div>
    );
};
