const fs = require("fs-extra");
const file = "hello.txt";
fs.outputFileSync(file, "hello,from node");
