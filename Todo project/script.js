document.addEventListener("DOMContentLoaded", () => {
  const InputText = document.getElementById("todo-input");
  const InputButton = document.getElementById("add-task-btn");
  const TodoList = document.getElementById("todo-list");
  let tasklist = JSON.parse(localStorage.getItem("Tasks")) || [];

  tasklist.forEach((task) => renderTask(task));

  InputButton.addEventListener("click", () => {
    const taskText = InputText.value.trim();
    if (taskText === "") return;

    const NewTask = {
      id: Date.now(),
      text: taskText,
      Completed: false,
    };

    tasklist.push(NewTask);
    renderTask(NewTask);
    InputText.value = "";
    console.log(tasklist);
    Savetasks();
  });
  function renderTask(task) {
    const li = document.createElement('li')
    li.setAttribute("data_id", task.id)
    if(task.Completed) li.classList.add("completed")
    li.innerHTML=`
    <span> ${task.text}</span>
    <button>Delete</button>
    `;
    li.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON') return;
    task.Completed = !task.Completed
    li.classList.toggle('completed')
    Savetasks();

    })
    li.querySelector("button").addEventListener('click', (e)=> {
      e.stopPropagation();
      tasklist.filter((t) =>t.id === !task.id)
      li.remove();
      Savetasks();

    })
    TodoList.appendChild(li);
  }
  function Savetasks() {
    localStorage.setItem("Tasks", JSON.stringify(tasklist));
  }
});
