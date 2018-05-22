// grab DOM elements
const listDiv = document.getElementById("app-content");

// accessing form id= create-list-form
const form = document.getElementById('create-list-form')

// create an array to store lists in
const store = [];

function formRenderer() {

// create form element "<form> blajh badsfads </form>"
const otherForm = document.createElement('form');
otherForm.setAttribute("id", "create-task-form");
otherForm.innerHTML = `
<label for='parent-list'>Select List:</label>
<select id='parent-list'>
${store.map(name => `<option value= ${name} selected>
  ${name}
</option>`)}
</select>

<label for='new-task-description'>Task description:</label>
<input required type='text' id='new-task-description' placeholder='description'>

<label for='new-task-priority'>Priority level:</label>
<input type='text' id='new-task-priority' placeholder='priority'>
<input type='submit' value='Create New Task'>`
  listDiv.append(otherForm)
  otherForm.addEventListener("submit", (e) =>{
    // value of task name :( this is a sad sad way to find this
    let taskName = e.path[0].children[3].value
    // priority level
    let priorityLevel = e.path[0].children[5].value

    /////!!!!!!  THIS IS WHERE WE STOPPED WORKING
    /// USE ARROW FUNCTIONS????
    debugger
  })
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

    // push value into store array
    store.push(value)


    const somethign = formRenderer.bind(this)
    somethign()
    // if the "lists" div dont exist, create it.
    //the "lists" div will constain out each of our "list" div(s) -- the lists vs list is confusing
    if (!document.getElementById('lists')){
      const newListsDiv = document.createElement('div')
      newListsDiv.setAttribute("id", "lists")
      listDiv.append(newListsDiv)
    }

    // add new list using the conventions from working example
    //current hierarchy listDiv > newListsDiv > newListDiv
    //current hierarchy #app-content > #lists > unnamed div(s)
    const newListsDiv = document.getElementById('lists')
    const newListDiv = document.createElement('div')
    newListDiv.innerHTML = `<h2>${value}</h2>`
    newListsDiv.append(newListDiv)

    // Clear text box once we take the value from it
    form.children[1].value = ''

  })
  ////// END OF THE SUBMIT BUTTON ACTIONS ///////


  // const app = new TaskLister();
});
