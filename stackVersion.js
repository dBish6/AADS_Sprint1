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
  try {
    if (
      fs.readFileSync(path.join(__dirname, "json", "stack.json"), "utf-8") == ""
    ) {
      let obj = {};
      // let array = [];
      const stack = new Stack.Stack();
      // Adding to the Stack.

      let stack1 = stack.push(agent);

      // Were not doing anything with the stack?
      // array.push(stack1);
      stack.items = stack1;
      obj = stack1;
      // stack.push(message);
      console.log(stack1);

      let messageJSON = JSON.stringify(agent, null, 2);

      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        messageJSON
      );
    } else {
      const data = await fsPromises.readFile(
        path.join(__dirname, "json", "stack.json")
      );

      let agents = JSON.parse(data);
      const stack = new Stack.Stack();

      stack.push(agent);

      let messageJSON = JSON.stringify(agents, null, 2);

      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        messageJSON
      );
    }

    // Removing from the Stack
    // const selfDestruct = async () => {
    //   // await fsPromises.rm(path.join(__dirname, "json", "stack.json"), {
    //   //   force: true,
    //   // });
    //   const agent = await fsPromises.readFile(
    //     path.join(__dirname, "json", "stack.json")
    //   );
    //   message = JSON.parse(agent);
    //   stack.pop(message);

    //   console.log("Message will self destruct in 5 seconds!");
    //   setTimeout(selfDestruct, 5000);
    //   console.log;
    // };

    console.log(`Message was retreived, ${agent.AgentID}.`);
  } catch (err) {
    console.error(err);
  }
  // return messageJSON;
};

// Poping "data:" out of the stack.
const agentRetrieveStack = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "json", "stack.json")
    );

    let messages = JSON.parse(data);
    const stack = new Stack.Stack();
    stack.items = messages;
    const remove = stack.pop();

    // Probably could of done new Object();
    let obj = {};
    obj.AgentID = remove.AgentID;
    obj.StructureID = remove.StructureID;
  } catch (err) {
    console.log(err);
  }
  return obj;
};

// const agentRequestStack = async () => {
//   let agent = JSON.parse(`{
//     "data": "2 Days to complete",
//     "AgentID": "007",
//     "StructureID": "1947"
//     }`);
//   try {

//     if (
//       fs.readFileSync(path.join(__dirname, "json", "stack.json"), "utf-8") == ""
//     ) {
//       let requests = [];
//       let message = requests.push(agent);
//       // stack.push(message.data);
//       // stack.push(message.AgentID);
//       // stack.push(message.StructureID)
//       stack.push(message);
//       console.log(message);

//       let messageJSON = JSON.stringify(agent, null, 2);

//       await fsPromises.writeFile(
//         path.join(__dirname, "json", "stack.json"),
//         messageJSON
//       );
//     } else {
//       // const agent = await fsPromises.readFile(
//       //   path.join(__dirname, "json", "stack.json")
//       // );
//       // let message = JSON.parse(agent);

//       stack.push(message);

//       console.log(message);

//       let messageJSON = JSON.stringify(message, null, 2);

//       await fsPromises.writeFile(
//         path.join(__dirname, "json", "stack.json"),
//         messageJSON
//       );

//       const selfDestruct = async () => {
//         // await fsPromises.rm(path.join(__dirname, "json", "stack.json"), {
//         //   force: true,
//         // });
//           const agent = await fsPromises.readFile(
//        path.join(__dirname, "json", "stack.json")
//       );
//       message = JSON.parse(agent);
//       stack.pop(message)

//       console.log("Message will self destruct in 5 seconds!")
//         setTimeout(selfDestruct, 5000);
//         console.log;

//       };
//     }
//     console.log(`Message was retreived, ${agent.AgentID}.`);
//   } catch (err) {
//     console.error(err);
//   }
//   return messageJSON;
// };

module.exports = {
  agentRequestStack,
  agentRetrieveStack,
};
