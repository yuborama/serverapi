const app = require('./server.js');
require("./database.js");

app.listen(app.get("port"), () => {
  console.log(`server in port ${app.get("port")}`);
});
