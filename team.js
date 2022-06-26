// 1. push(), 2. pop() 3. peek() 4. isempty() 5. size() 6. clear() 7. toString()
const { rejects } = require("assert");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { rawListeners } = require("process");
var readline = require("readline");
// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

//   // Adding an element to the stack.
//   push(element) {
//     this.items[this.count] = element;
//     console.log(`${element} added to position ${this.count}`);
//     this.count += 1;
//     return this.count - 1;
//   }

//   // Removing an element from the back of the stack.
//   pop() {
//     if (this.count === this.item) {
//       return undefined;
//     }
//     let deleteItem = this.items[this.count - 1];
//     this.count -= 1;
//     console.log(`${deleteItem} deleted from stack`);
//     return deleteItem;
//   }

//   // Checking the element at the top of the stack.
//   peek() {
//     console.log(`The top element is ${this.items[this.count - 1]}`);
//     return this.items;
//   }

//   isEmpty() {
//     console.log(this.count === 0 ? `stack is empty` : `stack is not empty`);
//     return this.count == 0;
//   }

//   toString() {
//     if (this.isEmpty()) {
//       return "";
//     }
//     let objString = `${this.items[0]}`;
//     for (let i = 1; i < this.count; i++) {
//       objString = `${objString}, ${this.items[i]}`;
//     }
//   }
// }

let test = {};

let newInfo = JSON.parse(`{
  "Agent Number": "007"
  "Message": "Wearing a red hat"
  "Structure ID": "3"
}`);

const question1 = async () => {
  try {
    readline.question("What's your Agent Number? ", (agentNum) => {
      test.push(agentNum);
      console.log(test);
      fsPromises.appendFile("stack.json", JSON.stringify(agentNum));
      console.log(`Thank You Agent ${agentNum}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("What's your Agent Number? ", (agentNum) => {
//       test.push(agentNum);
//       console.log(test);
//       fs.appendFile("stack.json", JSON.stringify(agentNum), function (err) {
//         if (err) throw err;
//       });
//       console.log(`Thank You Agent ${agentNum}`);
//       resolve();
//     });
//   });
// };

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("What is your message? ", (msg) => {
//       newInfo.message = msg;
//       test.push(msg);
//       console.log(test);
//       fs.appendFile("stack.json", JSON.stringify(msg), function (err) {
//         if (err) throw err;
//       });
//       console.log(`Message Saved ${msg}`);
//       resolve();
//     });
//   });
// };

// const question3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Please enter Structure ID: ", (StructureID) => {
//       newInfo.structure_id = StructureID;
//       test.push(StructureID);
//       console.log(test);
//       fs.appendFile("stack.json", JSON.stringify(StructureID), function (err) {
//         if (err) throw err;
//       });
//       console.log(`Thanks. Entered Value: ${StructureID}`);
//       resolve();
//     });
//   });
// };

const main = async () => {
  await question1();
  await question2();
  await question3();

  newInput();
  rl.close();
};
main();

function newinput(number, msg, id) {
  newInfo.agent_number = number;
  newInfo.message = msg;
  newInfo.structure_id = id;

  let = users = fs.readdirSync("stack.json", "utf-8");

  if (fs.readFileSync("stack.json", "utf-8") == "") {
    let agents = [];
    agents.push(newInfo);
    users = JSON.stringify(agents);
  } else {
    let users = fs.readFileSync("stack.json", "utf-8");
    let agents = JSON.parse(users);
    agents.push(newInfo);
    users = JSON.stringify(agents);
  }

  fs.writeFile("stack.json", users, (err) => {
    if (err) console.log(err);
    else console.log(`New agent message added: ${msg}`);
  });
  return newInfo;
}

newinput("21", "hey4", "49");

// let Agent = {
//   data: '2 Days to complete',
//   AgentID: '007',
//   StructureID: '1947',
//   LocationID: '5'
// };

// fs.writeFileSync(path.resolve(__dirname, "json", 'stack.json'), JSON.stringify(Agent, null, 2));

// const stack = new Stack();
// stack.push("man");
// stack.push("women");
// stack.push("chicken");
// stack.push("velociraptor");
// stack.push("Building");
// stack.push("Joe");

// stack.push("Man Wearing Black");
// stack.push("21st Street");
// stack.push("Silinced 1911");
// stack.push("Parking Garage on 44th");
// stack.push("Big Man");

// stack.pop();
// stack.toString();
// stack.peek();
// console.log("");
// console.log(Agent);

// module.exports = {
//    Stack: Stack
// };
