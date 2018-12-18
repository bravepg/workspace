var stream = require('stream');

const readable = new stream.Readable();
console.log(readable.isPaused()); // === false

readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false