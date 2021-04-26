import   './b.js';
import   './g.js';

recordExecution(import.meta.url);

const order=exections.join('');
console.assert(order==='acedbhigf',order);