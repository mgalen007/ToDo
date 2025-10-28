const addBtn = document.getElementById("add-btn");
const myTasks = document.getElementById("my-tasks");
const task = document.querySelector("input");
let count = 0;

addBtn.addEventListener("click", () => {    
    count++;

    const theTask = document.createElement("div");
    theTask.classList.add("task-card"); 

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check-box");

    const item = document.createElement("p");
    item.textContent = `${count}.  ${task.value}`;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "X";
    
    theTask.appendChild(removeBtn);
    theTask.appendChild(checkBox);
    theTask.appendChild(item);
    myTasks.appendChild(theTask);
    
    checkBox.addEventListener("click", () => {
        item.classList.toggle("remove");
        item.style.color = "rgba(0, 0, 0, 0.5)";
    })

    removeBtn.addEventListener("click", () => {
        count--;
        theTask.classList.add("disappear");
    })
    
    task.value = "";
})
