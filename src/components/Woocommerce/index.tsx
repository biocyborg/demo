import React from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '@mui/material';

import { getApiKey } from '../../DSers';

import work from './work';

import styles from './index.module.scss';

interface AppProps {
  WooApi: object;
  setWooApi: (storeId: any, val: any) => void;
}

const Woocommerce = ({ WooApi, setWooApi }: AppProps) => {
  const getWooApi = async () => {
    const a = [
      {
        api: 'https://atc.dsers.com/',
        domain: 'https://zmlbright.cn/',
        store_id: 'c9842lspuf6g01gkrtmg',
      },
      {
        api: 'https://atc.dsers.com/',
        domain: 'https://yanghuichao.com/',
        store_id: 'c983ucspuf6g01gkrt80',
      },
    ];

    for (let i = 0; i < a.length; i++) {
      const result = await getApiKey(a[i].api, a[i].store_id);
      console.log(result);
      setWooApi(a[i].store_id, result);
    }

    // worker();
  };

  const push = async () => {
    try {
      const newWooApi = Object.values(WooApi);
      console.log(newWooApi);
      for (let i = 0; i < newWooApi.length; i++) {
        console.log(await newWooApi[i].get('customers'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const worker = () => {
    console.log(WooApi);
    const worker = new Worker(work);
    worker.postMessage({
      type: 'test',
      payload: {
        WooApi,
      },
    });
    worker.onmessage = function (event) {
      console.log(event);
    };
  };

  return (
    <>
      <Button variant="contained" onClick={getWooApi}>
        getWooApi
      </Button>
      <Button variant="contained" onClick={push}>
        push
      </Button>
      '
    </>
  );
};

const stateToProps = (state: { WooApi: any }) => {
  return {
    WooApi: state.WooApi,
  };
};

const dispatchToProps = (dispatch: (arg0: { type: string; value: { [x: number]: any } }) => void) => {
  return {
    setWooApi(storeId: any, val: any) {
      const obj = {
        [storeId]: val,
      };
      const action = {
        type: 'setWooApi',
        value: obj,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(Woocommerce);
