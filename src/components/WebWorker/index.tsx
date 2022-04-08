import * as React from 'react';

import { Button } from '@mui/material';

import work from './work';

const WebWorker = () => {
  //

  function worker() {
    const worker = new Worker(work);
    worker.postMessage('Hello World');
    worker.onmessage = function (event) {
      console.log('Received message ' + event.data);
    };
  }

  //
  return (
    <>
      <Button variant="contained" onClick={worker}>
        test worker
      </Button>
    </>
  );
};

export default WebWorker;
