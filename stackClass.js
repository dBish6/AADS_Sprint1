// 1. push(), 2. pop() 3. peek() 4. isempty() 5. size() 6. clear() 7. toString()
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Adding an element to the stack.
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to position ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  // Removing an element from the back of the stack.
  pop() { 
    if (this.count === this.item) {
      return undefined;
    }
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} deleted from stack`);
    return deleteItem;
  }

  // Checking the element at the top of the stack.
  peek() {
    console.log(`The top element is ${this.items[this.count - 1]}`);
    return this.items;
  }

  isEmpty() {
    console.log(this.count === 0 ? `stack is empty` : `stack is not empty`);
    return this.count == 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
  }
}

let Agent = { 
  data: '2 Days to complete',
  AgentID: '007', 
  StructureID: '1947',
  LocationID: '5'
};

fs.writeFileSync(path.resolve(__dirname, "json", 'stack.json'), JSON.stringify(Agent));

var data = {}
data.table = []
for (i=0; i <26 ; i++){
 var obj = {
     id: i,
     square: i * i
 }
 data.table.push(obj)
}


const stack = new Stack();
stack.push("man");
stack.push("women");
stack.push("chicken");
stack.push("velociraptor");
stack.push("Building");
stack.push("Joe");

stack.pop();
stack.toString();
stack.peek();
console.log("");
console.log(Agent);
module.exports = {
  Stack: Stack,  
};
