window.addEventListener('load', () => {
    const form = document.querySelector('#newTask');
    const taskInput = document.querySelector('#taskInput');
    const list = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = taskInput.value;

        if (!task) {
            alert('Please fill out the task');
            return;
        }

        const taskList = document.createElement("div");
        taskList.classList.add("task");

        const taskContentList = document.createElement("div");
        taskContentList.classList.add("content");
        // taskContentList.innerText = task

        taskList.appendChild(taskContentList);

        const taskInputList = document.createElement("input");
        taskInputList.classList.add("text", "submitTask");
        taskInputList.type = 'text';
        taskInputList.value = task;
        taskInputList.setAttribute("readonly", "readonly")

        taskContentList.appendChild(taskInputList);

        const taskActionList = document.createElement("div");
        taskActionList.classList.add("actions");

        const taskActionEdit = document.createElement("button");
        taskActionEdit.classList.add("btnEdit");

        const taskActionEditIcon = document.createElement("i");
        taskActionEditIcon.classList.add("fa-solid", "fa-pen-to-square");

        taskActionEdit.appendChild(taskActionEditIcon);
        taskActionList.appendChild(taskActionEdit);


        const taskActionDelete = document.createElement("button");
        taskActionDelete.classList.add("btnDelete");

        const taskActionDeleteIcon = document.createElement("i");
        taskActionDeleteIcon.classList.add("fa-solid", "fa-trash-can");

        taskActionDelete.appendChild(taskActionDeleteIcon);
        taskActionList.appendChild(taskActionDelete);

        taskList.appendChild(taskActionList);
        list.appendChild(taskList);

        taskInput.value = ""

        taskActionEdit.addEventListener('click', () => {

            if (taskInputList.hasAttribute("readonly")) {
                taskInputList.removeAttribute("readonly");
                taskActionEdit.innerText = "Save";
                taskInputList.focus();
            } else {
                taskInputList.setAttribute("readonly", "readonly");
                taskActionEdit.innerText = "";
                taskActionEdit.classList.add("fa-solid", "fa-pen-to-square");
                console.log('Changes saved:', taskInputList.value);
            }
        });
        
        taskActionDelete.addEventListener('click', () => {
           list.removeChild(taskList);
        })
    })
})