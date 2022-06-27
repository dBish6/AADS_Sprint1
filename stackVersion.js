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
      // let obj = {};
      // let array = [];
      const stack = new Stack.Stack();
      // Adding to the Stack.

      // for(i = 0; i < )
      stack.push(agent);
      const remove = stack.pop();

      // Probably could of done new Object();
      let obj = new Object();
      obj.data = remove.data;
      obj.AgentID = remove.AgentID;
      obj.StructureID = remove.StructureID;
      // Were not doing anything with the stack?
      // array.push(stack1);
      // stack.items = stack1;
      // obj = stack1;
      // stack.push(message);
      console.log(obj);

      let messageJSON = JSON.stringify(obj, null, 2);

      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        messageJSON
      );
    } else {
      const data = await fsPromises.readFile(
        path.join(__dirname, "json", "stack.json")
      );

      //for(i = 0; i < )
      let agents = JSON.parse(data);

      const stack = new Stack.Stack();
      stack.items = agents;
      const remove = stack.pop();
      //  for (i = 0; i < )
      let obj = new Object();
      obj.data = remove.data;
      obj.AgentID = remove.AgentID;
      obj.StructureID = remove.StructureID;
      console.log(obj);

      let messageJSON = JSON.stringify(obj, null, 2);

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

    let obj = new Object();
    obj.AgentID = remove.AgentID;
    obj.StructureID = remove.StructureID;

    // Pop out the last one in the stack somehow when the agent retrieved.
    obj.pop();
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
