document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = "";

            // Add delete button to the new task
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            li.appendChild(deleteButton);

            // Event listener for deleting task
            deleteButton.addEventListener("click", function() {
                li.remove();
            });
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
        }
    });
});
