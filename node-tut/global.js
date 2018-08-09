// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname

console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
    //sconsole.log(process);
 }
 // Now call above function after 2 seconds
 setTimeout(printHello, 2000);

 
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 2 seconds
//setInterval(printHello, 2000);


console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")


process.on('exit', function(code) {

    // Following code will never execute.
    setTimeout(function() {
       console.log("This will not run");
    }, 0);
   
    console.log('About to exit with code:', code);
 });
 console.log("Program Ended");

 // Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Getting executable path
console.log(process.execPath);

// Platform Information 
console.log(process.platform);

// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());

var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));


var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});