let listId = 0
class List {
  // your code here
  constructor (name){
    this.name = name
    this.id = ++listId
    store.list.push(this)
  }

}
