const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const Queue = require("./queueClass");

// Request from server.
const agentRequestQueue = async (message, agentID, structureID) => {
  let agent = {
    data: message,
    AgentID: agentID,
    StructureID: structureID,
  };
  try {
    if (!fs.existsSync(path.join(__dirname, "json", "queue.json"))) {
      fs.openSync(path.join(__dirname, "json", "queue.json"), "w");

      // Adding to the queue.
      const queue = new Queue.Queue();

      queue.enqueue(agent);

      console.log("queue items:");
      console.log(queue.items);

      let messageJSON = JSON.stringify(queue.items, null, 2);
      console.log(messageJSON);
      await fsPromises.writeFile(
        path.join(__dirname, "json", "queue.json"),
        messageJSON
      );
    } else {
      const data = await fsPromises.readFile(
        path.join(__dirname, "json", "queue.json")
      );

      let agents = JSON.parse(data);

      const queue = new Queue.Queue();
      queue.items = agents;

      queue.count = agents.length;

      queue.enqueue(agent);
      console.log("queue items:");
      console.log(queue.items);

      let messageJSON = JSON.stringify(queue.items, null, 2);
      await fsPromises.writeFile(
        path.join(__dirname, "json", "queue.json"),
        messageJSON
      );
    }
  } catch (err) {
    console.log(err);
  }
};

// Poping "data:" out of the stack.
const agentRetrieveQueue = async () => {
  let obj = new Object();
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  agentRequestQueue,
  agentRetrieveQueue,
};
