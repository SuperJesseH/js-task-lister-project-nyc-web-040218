let taskId = 0;
class Task {
  // your code here
  constructor (name, priority, listId){
    this.name = name;
    this.priority = priority;
    this.listId = listId;
    this.taskId = ++taskId;
    store.task.push(this)
  }

}
