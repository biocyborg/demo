import * as React from 'react';

import { Button } from '@mui/material';

import work from './work';

const ServiceWorker = () => {
  //

  function worker() {
    navigator.serviceWorker
      .register(work)
      .then((registration) => {
        //如果内容有更新，就会自动进行安装
        registration.onupdatefound = () => {
          const installingWorker = registration?.installing;
          if (installingWorker?.onstatechange) {
            installingWorker.onstatechange = () => {
              //安装之后判断安装状态进行提示
              if (installingWorker?.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('New content is available; please refresh.');
                } else {
                  console.log('Content is cached for offline use.');
                }
              }
            };
          }
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });

    //
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

export default ServiceWorker;
