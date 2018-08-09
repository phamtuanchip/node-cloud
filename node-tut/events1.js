var events = require("events");
 var eventHandler = function connected(){
     console.log('connection succesful!');
     eventEmitter.emit('data_received')
 }
 var eventEmitter = new events.EventEmitter();
 eventEmitter.on('connection', eventHandler);
 eventEmitter.on('data_received', ()=> {
    console.log('data received succesfully.');
 });

 eventEmitter.emit('connection');
 console.log("Program ended!")