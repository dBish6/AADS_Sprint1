const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const Stack = require("./stackClass");

const stack = new Stack.Stack();

const agentRequest = async (message, agentID, structureID) => {
  let agent = JSON.parse(`{
    "data": "2 Days to complete",
    "AgentID": "007",
    "StructureID": "1947"
    }`);
  try {
    // If the token.js file is empty...
    if (
      fs.readFileSync(path.join(__dirname, "json", "stack.json"), "utf-8") == ""
    ) {
      let requests = [];
      let message = requests.push(agent);
      stack.push(message);

      message = JSON.stringify(agent, null, 2);

      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        userTokens
      );
    } else {
      const data = await fsPromises.readFile(
        path.join(__dirname, "json", "stack.json")
      );
      let message = JSON.parse(data);

      stack.push(message);

      message = JSON.stringify(message, null, 2);

      await fsPromises.writeFile(
        path.join(__dirname, "json", "tokens.json"),
        userTokens
      );
    }
    console.log(`New token ${newToken.token} was created for ${username}.`);
  } catch (err) {
    console.error(err);
  }
  return newToken;
};
