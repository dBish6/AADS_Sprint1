const fs = require("fs");
const path = require("path");

const stack = require("./stackClass");

let Agent = {
  data: "2 Days to complete",
  AgentID: "007",
  StructureID: "1947",
  LocationID: "5",
};

// fs.writeFileSync(
//   path.join(__dirname, "json", "stack.json"),
//   JSON.stringify(Agent, null, 2)
// );

// var data = {};
// data.table = [];
// for (i = 0; i < 26; i++) {
//   var obj = {
//     id: i,
//     square: i * i,
//   };

//   data.table.push(obj);
// }
