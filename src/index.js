// grab DOM elements
const listDiv = document.getElementById("app-content");

// accessing form id= create-list-form
const form = document.getElementById('create-list-form')

// create an array to store lists in
const store = {list:[], task:[]};

function addList(name){
  // add new list using the conventions from working example
  //current hierarchy listDiv > newListsDiv > newListDiv
  //current hierarchy #app-content > #lists > unnamed div(s)
  const newListsDiv = document.getElementById('lists')
  const newListDiv = document.createElement('div')
  newListDiv.innerHTML = `<h2>${name}</h2>`
  newListsDiv.append(newListDiv)
  const orderList = document.createElement('ol')
  orderList.setAttribute('id', `${name}-roger`)
  newListDiv.append(orderList)

  // Clear text box once we take the value from it
  form.children[1].value = ''
}

function createParentDiv() {
  if (!document.getElementById('lists')){
    const newListsDiv = document.createElement('div')
    newListsDiv.setAttribute("id", "lists")
    listDiv.append(newListsDiv)
  }
}


function formRenderer() {
// create form element "<form> blajh badsfads </form>"
const otherForm = document.createElement('form');
otherForm.setAttribute("id", "create-task-form");
otherForm.innerHTML = `
      <label for='parent-list'>Select List:</label>
      <select id='parent-list'>
      ${store.list.map(list => `<option value="${list.name}" selected>
        ${list.name}
      </option>`)}
      </select>

      <label for='new-task-description'>Task description:</label>
      <input required type='text' id='new-task-description' placeholder='description'>

      <label for='new-task-priority'>Priority level:</label>
      <input type='text' id='new-task-priority' placeholder='priority'>
      <input type='submit' value='Create New Task'>`
listDiv.prepend(otherForm)
}



// fire event when the page loads
document.addEventListener('DOMContentLoaded', () => {
  ////// BEGIN SUBMIT ACTIONS /////
  // listen for "submit" button push
  form.addEventListener("submit", (e)=>{
    // prevent default behavior that reloads the page
    e.preventDefault();
    // find value that was typed into text field
    const value = form.children[1].value
    // if the "lists" div dont exist, create it.
    // the "lists" div will constain out each of our "list" div(s) -- the lists vs list is confusing
    createParentDiv()
    // OBJECT ORIENTED STUFF
    let newTab = new List(value)
    //Add new list to the DOM
    addList(newTab.name)
      // now that we have a least one list, render the taks maker form if it does not already exist
    if (!document.getElementById('create-task-form')){
      formRenderer()
    } else {
      const parentListSelector = document.getElementById('parent-list');
      parentListSelector.innerHTML =
      `${store.list.map(list => `<option value= "${list.name}" selected>
        ${list.name}
      </option>`)}`
    }
      ////// END OF THE SUBMIT BUTTON ACTIONS ///////
  })



/// it cant find create task form cause it dosent exist yet (maybe use then?)
listDiv.addEventListener("submit", (e)=>{
  e.preventDefault();
  const description = document.getElementById("new-task-description")
  const priority = document.getElementById("new-task-priority")
  const parentList = document.getElementById("parent-list")
  let currentListId = store.list.find(item => (
    item.name === parentList.value
  ))

  let newtask = new Task(description.value, priority.value, currentListId.id);

  // get element by id to find the unodered list!!!!! ENEDED HERE !!!!!

  let newLiItem = document.createElement('li')
  newLiItem.innerHTML = `${newtask.name} <br> ${newtask.priority}`
  let theList = document.getElementById(`${currentListId.name}-roger`)
  theList.append(newLiItem)
})


});
