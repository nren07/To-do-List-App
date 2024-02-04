const form=document.getElementById("input-form");
const todo=document.getElementById("to-do");
const task_count=document.getElementById("task-count");
const high_count=document.getElementById("high-count");
let taskNumber=1;
form.addEventListener("submit",(e)=>{
    let priority=null;
    e.preventDefault();
    let userInput;
    while (true) {
        userInput = prompt("Enter a number in the range [1, 3] where 1 represent low priority");
      
        // Check if the input is a number or in the specified range
        if (userInput === null) {
          // User clicked "Cancel" or closed the prompt
          alert("Operation cancelled.");
          break;
        } else if (!isNaN(userInput) && userInput.trim() !== "") {
          // Check if it's a valid number
          const number = parseFloat(userInput);
      
          // Check if the number is within the desired range
          if (number >= 1 && number <= 3) {
            // Valid input
            alert("You entered a valid number: " + number);
            break;
          } else {
            alert("Please enter a number within the specified range.");
          }
        } else {
          alert("Invalid input. Please enter a valid number.");
        }
      }
        const task_card=document.createElement("div");
        task_card.classList.add("task_card");
        let task=form.task.value;
        task_card.id=taskNumber++;
        task_card.draggable=true;
        task_card.addEventListener("dragstart", onDragStart);
        task_count.innerText=Number(task_count.innerText)+1;
        if(userInput==1){
            priority="Low";
            high_count.innerText=`${Number(high_count.innerText["0"])} of ${task_count.innerText}`;
        }
        else if(userInput==2){
            priority="Medium";
            high_count.innerText=`${Number(high_count.innerText["0"])} of ${task_count.innerText}`;
        }
        else{
            priority="High";
            high_count.innerText=`${Number(high_count.innerText["0"])+1} of ${task_count.innerText}`;
        }
        task_card.innerHTML = `
        <div>
            <input type="checkbox">
            <ciet class="max">
                ${task}
            </ciet>
        </div>
        <pre>  * Priority: ${priority} * </pre>
        <span class="material-icons delete" onclick="deleteTask(${task_card.id})">delete</span>
    `;
    todo.appendChild(task_card);
    form.reset();
});
function deleteTask(taskId) {
    let checkbox = document.getElementById(taskId).querySelector('input[type="checkbox"]');
    let task_card = document.getElementById(taskId);

    if (checkbox.checked) {
      task_card.remove();
    }
    else{
        alert("plz make check first");
    }
  }