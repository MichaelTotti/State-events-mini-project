import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, categories }) {
  const [taskList, setTaskList] = useState(tasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    const updatedTasks = taskList.filter((task) => task.text !== taskText);
    setTaskList(updatedTasks);
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const filteredTasks =
    selectedCategory === "All"
      ? taskList
      : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="tasks">
        {filteredTasks.map((task) => (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
