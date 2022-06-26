const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const Stack = require("./stackClass");

// (message, agentID, structureID)

// Request from server.
const agentRequestStack = async (message, agentID, structureID) => {
  let agent = {
    data: message,
    AgentID: agentID,
    StructureID: structureID,
  };
  let obj = {};
  // let array = [];
  const stack = new Stack.Stack();
  // Adding to the Stack.

  let stack1 = stack.push(agent);

  // Were not doing anything with the stack?
  // array.push(stack1);
  //   obj = stack1;
  // stack.push(message);
  console.log(stack1);
};

agentRequestStack("yo", 007, 23);
