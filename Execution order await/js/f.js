import   './b.js';
import   './g.js';

recordExecution(import.meta.url);

const order=exections.join('');
console.log("order",order);
console.assert(order!=='acedbhigf',order);