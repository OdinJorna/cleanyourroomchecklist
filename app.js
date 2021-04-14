// variables that select elements


// Add task to tasklist
let form = document.querySelector('form');
const taskInput = document.getElementById('task'); //select the value of the textbox that contains taskname

form.addEventListener('submit', addTask);

function addTask (e) {
  const newTask = document.createElement('li'); //creates new list element
  const linkX = document.createElement('a'); // create new a element for x  
  const linkXI = document.createElement('i'); // creates new i element for x
  const linkY = document.createElement('a'); // create new a element for checkmark
  const linkYI = document.createElement('i'); // creates new i element for checkmark

  linkX.className = 'delete-item secondary-content'; // adds classes to a element
  linkXI.className = 'fa fa-remove';
  linkY.className = 'clear-item secondary-content'; // adds classes to a element
  linkYI.className = 'fa fa-check';

  linkX.appendChild(linkXI); // adds the i element as child of the a element
  linkY.appendChild(linkYI); // adds the i element as child of the a element

  newTask.className = 'collection-item'; // adds class to list element
  newTask.appendChild(document.createTextNode(taskInput.value)); // adds the text from the form as the text of the task
  newTask.appendChild(linkX); // adds the a element as a child of the li element
  newTask.appendChild(linkY); // adds the a element as a child of the li element

  document.querySelector('ul.collection').appendChild(newTask); // adds the list element to the list
  e.preventDefault(); //stops page from reloading after pressing button
  taskInput.value = ''; // empties the input field
}

// Clear all tasks
document.querySelector('.clear-tasks').addEventListener('click', clearAllTasksFunction);

function clearAllTasksFunction () {
  const allTasks = document.querySelectorAll("li");
  for (i = 0; i < allTasks.length; i++) {
    allTasks[i].remove();
  }
}

// Clear a specifik task
document.querySelector('.collection').addEventListener('click', removeSingleTask);

function removeSingleTask (e) {
  if(e.target.parentElement.classList.contains('delete-item')) { 
    e.target.parentElement.parentElement.remove(); // use event bubeling to go upwards and delete the entire li
  }
}


// mark a task as completed

document.querySelector('.collection').addEventListener('click', markTaskAsCompleted);
let number = 0;
let numberOfTasksCompleted = document.getElementById('numberCompleted');
numberOfTasksCompleted.innerHTML = number;

/* the starting kitty picture */
let kittyImage = document.getElementById('kitty');
kittyImage.src = '/cleanyourroomchecklist/img/sadkitty.jpg';
let kittySays = document.getElementById('kitty-says');
kittySays.innerHTML = 'Your room is a mess and that makes this kitty sad : ('

function markTaskAsCompleted (e) {
  if(e.target.parentElement.classList.contains('clear-item')) {
    e.target.parentElement.parentElement.remove(); // use event bubeling to go upwards and delete the entire li
    numberOfTasksCompleted.innerHTML++; // add 1 to the number of tasks completed to celebrate yay!
    number++;
      switch (number) { //kitty will be happy if you do enough tasks. Enter here the changes in pictures
        case 2:
          kittyImage.src = '/cleanyourroomchecklist/img/neutralkitty.jpg';
          kittySays.innerHTML = 'You are making progress! Good job!'
          break
        case 5:
          kittyImage.src = '/cleanyourroomchecklist/img/happykitty.jpg';
          kittySays.innerHTML = 'Yes you did it! I am proud of you.'
          break
      }
  }
}
