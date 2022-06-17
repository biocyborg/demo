const workercode = async () => {
  this.onmessage = async function (e) {
    const {
      type,
      payload: { WooApi },
    } = e.data;
    if (type === 'test') {
      try {
        const newWooApi = Object.values(WooApi);
        for (let i = 0; i < newWooApi.length; i++) {
          console.log(newWooApi[i]);
          console.log(await newWooApi[i].get('customers'));
        }
      } catch (error) {
        console.log(error);
      }
    }

    // this.postMessage(workerResult);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
