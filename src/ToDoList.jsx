import React, { useState } from 'react';

function ToDoList() { {/* Function with a predetermined task and logic on how to write a new task */}
    const [tasks, setTasks] = useState(["Go to the gym"]);
    const [newTask, setNewTask] = useState('');

function handleInputChange(event) { {/* Function that handles input value when entering a new task */}
    setNewTask(event.target.value);
    }

function addTask() { {/* Add new task function */}
    if (newTask.trim() !== "") {
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask('');
     }
}

function deleteTask(index) { {/* Delete task function */}
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

function moveTaskUp(index) { {/* Move task upwards function */}
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function moveTaskDown(index) { {/* Move task downwards function */}
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

    return (
        <div className='to-do-list'> {/* todolist div section */}
        <h1>To-Do List</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}
                >Add
                </button>
            </div>
            <ol> {/* Display task, delete, move up and down function */}
                {tasks.map((task, index) => ( 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >⬆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >⬇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
