const re = /\/([a-z])\.js$/;
const exections = [];

function recordExecution(url) {
    // http://127.0.0.1:5500/Execution/js/a.js => a
    exections.push(re.exec(url)[1]);
}
 

