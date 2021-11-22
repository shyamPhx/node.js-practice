const os = require('os');

console.log("OS Version", os.version());
console.log("Free memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("CPUs", os.cpus());