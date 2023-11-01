import React, {useEffect, useState} from "react";
import './tasks.scss';
import { getTasks } from "./tasks.service";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const TaskPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        // Fetch tasks when the component mounts
        getTasks()
            .then((data) => {
                setTasks(data.tasks);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="tasks-container">
            <h2>Task List</h2>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <div className="task-title">{task.title}</div>
                        <div className="task-description">{task.description}</div>
                        <div className="task-status">
                            Status: {task.completed ? 'Completed' : 'Incomplete'}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskPage