const taskInput = document.getElementById('task-input');

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const listItem = document.createElement('li');

        listItem.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove";
        deleteButton.onclick = () => listItem.remove();

        listItem.append(deleteButton);

        document.getElementById('task-list').append(listItem);

        taskInput.value = "";
    } else {
        alert("Please enter a valid task!");
    }
}