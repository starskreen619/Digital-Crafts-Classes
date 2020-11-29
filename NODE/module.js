const os = require("os");
const arr = [os.freemem(), os.networkInterfaces(), os.hostname()];

console.log(arr);
