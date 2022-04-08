const workercode = () => {
  console.log(this);
  console.log(navigator);
  console.log(navigator.serviceWorker);
  navigator.serviceWorker.ready.then((registration) => {
    console.log(registration);
  });
};

let code = workercode.toString();

console.log(code);

code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

console.log(code);

const blob = new Blob([code], { type: 'application/javascript' });

console.log(blob);

const worker_script = URL.createObjectURL(blob);

console.log(worker_script.substring('blob:', 1));

module.exports = worker_script;
