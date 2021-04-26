import './c.js';
import './e.js';

await new Promise(resolve => setTimeout(resolve, 1000));

recordExecution(import.meta.url);