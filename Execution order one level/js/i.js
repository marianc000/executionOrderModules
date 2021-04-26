import   './a.js';
import   './b.js';
import   './c.js';
import   './d.js';
import   './e.js';
import   './f.js';
import   './g.js';
import   './h.js';

recordExecution(import.meta.url);

const order=exections.join('');
console.assert(order==='abcdefghi',order);

 