import React, {useState} from "react";

export default function Todolist() {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const addtask = () => {
        if (task.trim() !== "") {
            setTaskList([...tasklist, task]);
            setTask("");
        }
    };

    return (
        <>
            <div className="text-center my-3">
                <p className="h5">Todo list application</p>
                <div>
                    <label htmlFor="task" className="me-2">
                        Enter task:
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        className="col-3 my-2"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn btn-primary my-2" onClick={addtask}>
                        Add this task
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <table className="table table-striped table-hover w-50">
                        <thead>
                            <tr>
                                <th>Sl.no</th>
                                <th>Task</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasklist.map((task, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{task}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm">
                                            Done
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
