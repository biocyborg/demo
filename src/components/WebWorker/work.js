const workercode = () => {
  this.onmessage = function (e) {
    console.log('Message received from main script');
    const workerResult = 'Received from main: ' + e.data;
    console.log('Posting message back to main script');
    this.postMessage(workerResult);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
