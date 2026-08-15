//import { Link } from "react-router";

function TaskList() {
    const tasks = [
        {id: "1",
        title: "Shopping",
        description: "Picking up items from the store."
        },
        
        {id: "2",
        title: "Cleaning",
        description: "Making things clean."
        },
        
        {id: "3",
        title: "Cooking",
        description: "Preparing meals to eat."
        }
    ];

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                   <li key={task.id}>
                   {task.title} 
                   {task.description}
                </li> 
            ))}
            </ul>
        </div>
    );

}

export default TaskList;