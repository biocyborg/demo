import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Divider } from '@mui/material';

import styles from './index.module.scss';

import store from '../../store/sagaMiddleware';
import WooApi from '../../WooAPI/RestApi';

import { DefinedRetrieve } from '../../WooAPI/Func/index';
import { URLOrder } from '../../WooAPI/Orders/API';

import { DefineXMLHttpRequestGET } from '../../DSers/Core';

import jsonBigint from 'json-bigint';
import { BigInteger } from 'jsbn';
import punycode from 'punycode';
import JSBI from 'jsbi';

interface AppProps {
  inputValue: string;
  inputChange: (event: { target: { value: string } }) => void;
}

const Html = ({ inputValue, inputChange }: AppProps) => {
  function storeChange() {
    setAsd(store.getState().inputValue);
  }
  store.subscribe(storeChange); //订阅Redux的状态

  const [asd, setAsd] = useState<string>('');
  const [state, setState] = useState<number>(2);
  const [over, setOver] = useState<string>('test');

  const [aa, setAa] = useState<string>('');
  const [bb, setBb] = useState<string>('');
  const [cc, setCc] = useState<string>('');

  useEffect(() => {
    //     console.log('234');
    //     const testRoot = document.getElementById('testRoot');
    //     const testContent = document.getElementById('testContent');
    //     const testR = `<div id='testRoot'></div>`;
    //     const html = `<div id='aaa'
    //                 style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; margin: 30px auto 15px; max-width: 560px;">
    //                 <table style="border-collapse: collapse; width: 100%;" align="center" border="0" cellpadding="0"
    //                   cellspacing="0">
    //                   <tbody>
    //                     <tr>
    //                       <td
    //                         style="border-collapse: collapse; font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px;"
    //                         align="center">
    //                         <div
    //                           style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
    //                           <table border="0" cellpadding="0" cellspacing="0"
    //                             style="border-collapse: collapse; width: 100%;">
    //                             <tbody>
    //                               <tr>
    //                                 <td
    //                                   style="border-collapse: collapse; font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; "
    //                                   valign="top">
    //                                   <table border="0" cellpadding="0" cellspacing="0"
    //                                     style="border-collapse: collapse; width: 100%;">
    //                                     <tbody>
    //                                       <tr>
    //                                         <td>
    //                                           <div style="padding: 10px; font-size: 16px;">
    //                                             ${bb} <a id="domain"
    //                                               style="color: #FE9024; text-decoration: none;"
    //                                               href="domain_url">${aa}</a>!
    // ${cc}
    //                                             <a href="{{ $track.TrackingUrl }}" target="_blank"
    //                                               value="{{ $track.TrackingUrl }}"
    //                                               style="color: #fe8f24; text-decoration: none; font-size: 14px; width: 100px;">Track</a>
    //                                           </div>
    //                                         </td>
    //                                       </tr>
    //                                     </tbody>
    //                                   </table>
    //                                 </td>
    //                               </tr>
    //                             </tbody>
    //                           </table>
    //                         </div>
    //                       </td>
    //                     </tr>
    //                   </tbody>
    //                 </table>
    //                 <div style="clear: both"></div>
    //                 <div style="clear: both;"></div>
    //               </div>`;
    // idd?.insertAdjacentHTML('afterbegin', html);
  }, [aa, bb, cc]);

  async function indexedDB() {
    let db: any;
    const request = window.indexedDB.open('test', 1);

    request.onupgradeneeded = function (event: any) {
      console.log('更新', event);
      db = event?.target?.result;
      if (!db.objectStoreNames.contains('test1')) {
        console.log(db);
        const objectStore = db.createObjectStore('test1', {
          autoIncrement: true,
        });
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
      }
    };

    request.onsuccess = function (event: any) {
      console.log('打开数据库完成', event);
      db = event?.target?.result;
      const transaction = db.transaction('test1', 'readwrite').objectStore('test1');

      transaction.add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' });

      transaction.openCursor().onsuccess = function (event: any) {
        const cursor = event.target.result;
        if (cursor) {
          console.log(cursor);
          cursor.continue();
        } else {
          console.log('没有更多数据了!');
        }
      };
    };

    request.onerror = function (event) {
      console.log('数据库打开报错', event);
    };

    // console.log(db.transaction(["test"]));
    // console.log(db);
    // let data = db
    //   ?.transaction(["test1"], "readwrite")
    //   .objectStore("test1")
    //   .add({ name: "张三", email: "123@qq.com" });
    // data.onsuccess = function (event: any) {
    //   console.log(event);
    //   console.log("数据写入成功");
    // };

    // data.onerror = function (event: any) {
    //   console.log(event);
    //   console.log("数据写入失败");
    // };
  }

  function changeStr(val: string, index: number, replacement: string) {
    return val.substring(0, index) + replacement + val.substring(index + replacement.length);
  }

  function charCodeAts() {
    let a = '123  sdfgdfgh dfgd  dsfsdf  asdfsdfsddfgdfjgh ';
    for (let i = 0; i < a.length; i += 1) {
      if (a.charCodeAt(i) === 160) {
        a = changeStr(a, i, '_');
      }
    }
    console.log(a);
  }

  function Punycode() {
    console.log(punycode.decode('manaa-pta'));
    console.log(punycode.decode('https://xn--lkt-qla.fr/'));
    console.log(punycode.encode('https://xn--lkt-qla.fr/'));
    console.log(punycode.encode('☃-⌘'));
    console.log(punycode.encode('läkt'));
    console.log(punycode.encode('https://läkt.fr'));
  }

  function jsonBigints() {
    const json = '{ "value": 9223372036854776000, "v2": 123 }';
    const a = jsonBigint.parse(json).value.toString();
    console.log(a);
  }

  function jsbns() {
    const bi = new BigInteger('9223372036854775807');
    console.log(bi.bitLength());
    console.log(bi.toString());
    console.log(bi.negate());
  }

  function img() {
    const url = 'https://ae01.alicdn.com/kf/Hfeb37cdcde39478abfd1dccffa22cbd7f.jpg';
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
      console.log(httpRequest);
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const img: any = new Image();
        img.src = url;
        img.onload = function () {
          console.log(img.width);
          console.log(img.height);
        };
      }
      if (httpRequest.readyState === 4 && (httpRequest.status === 0 || httpRequest.status > 400)) {
        console.log('图片错误');
      }
    };
  }

  function qwe(event: { target: { value: string } }) {
    store.dispatch({ type: 'change_input', data: event.target.value });
  }

  async function testwoo() {
    const request = WooApi(
      'https://yanghuichao.com',
      'ck_ea5809c02bb89fd7806f621e28be392f902ec1ef',
      'cs_bff6e60ffa2bffc2ad8b1debd7d53a61a1545466',
    );
    console.log(request);
    try {
      const r = await DefinedRetrieve({
        url: await URLOrder(247805),
        request,
        data: { page: 1, per_page: 100 },
      });
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  }

  function JSBIBigInt() {
    // https://github.com/GoogleChromeLabs/jsbi
    const max = JSBI.BigInt(9223372036854776000);
    console.log(max);
    console.log(Number(String(max)));
    console.log(String(max));
  }

  function Concurrent() {
    const arr = Array.from(new Array(0).keys());
    arr.forEach(async () => {
      for (let i = 0; i < 0; i++) {
        await DefineXMLHttpRequestGET('https://atc.dsers.com/api/v1/woo/product/list', {
          data: {
            canceled: 0,
            country: '',
            cursor: '',
            end_at: 1648137599,
            fulfilled: 0,
            keywords: '',
            search_type: 1,
            size: 40,
            sort: 0,
            source: 0,
            start_at: 1645459200,
            status: 2,
          },
          options: {
            wooid: 'c8onum809p9g01iiu47g',
          },
        });
      }
    });
  }

  function sendMessage() {
    const laserExtensionId = 'jnoblhkfklnjkhamdealalpgkdehdhkl';
    const { chrome } = window;
    // Make a simple request:
    chrome.runtime.sendMessage(laserExtensionId, { getTargetData: true }, function (response: any) {
      console.log(response);
    });
  }

  return (
    <>
      <input value={inputValue} onChange={inputChange} />
      <Divider />
      <input value={asd} onChange={qwe} />
      <Divider />
      <Button variant="contained" onClick={() => setState(3)}>
        ({state})setState
      </Button>
      <Divider />
      <Button variant="contained" onClick={testwoo}>
        测试Woo
      </Button>
      <Divider />
      <div className={styles.display}>
        <div className={styles.flex}>
          <div className={styles.over}>{over}</div>
        </div>
        <div>test</div>
      </div>
      <Button variant="contained" onClick={() => setOver('test112233445566778899001234567890')}>
        addOver
      </Button>
      <Button variant="contained" onClick={() => setOver('test')}>
        clearOver
      </Button>
      <Divider />
      <Button variant="contained" onClick={indexedDB}>
        indexedDB
      </Button>
      <Divider />
      <Button variant="contained" onClick={charCodeAts}>
        charCodeAt
      </Button>
      <Divider />
      <Button variant="contained" onClick={Punycode}>
        Punycode
      </Button>
      <Divider />
      <Button variant="contained" onClick={jsonBigints}>
        jsonBigint
      </Button>
      <Divider />
      <Button variant="contained" onClick={jsbns}>
        jsbn
      </Button>
      <Divider />
      <Button variant="contained" onClick={img}>
        img
      </Button>
      <Divider />
      <Button variant="contained" onClick={JSBIBigInt}>
        JSBIBigInt
      </Button>
      <Button variant="contained" onClick={Concurrent}>
        Concurrent
      </Button>
      <Button variant="contained" onClick={sendMessage}>
        sendMessage
      </Button>
      <Divider />
      <div id="idd" />
      <input type="text" onChange={(e) => setAa(e.target.value)} />
      <input type="text" onChange={(e) => setBb(e.target.value)} />
      <input type="text" onChange={(e) => setCc(e.target.value)} />
    </>
  );
};

const stateToProps = (state: { inputValue: string }) => {
  return {
    inputValue: state.inputValue,
  };
};

const dispatchToProps = (dispatch: (arg0: { type: string; value: string }) => void) => {
  return {
    inputChange(event: { target: { value: string } }) {
      const action = {
        type: 'change_input',
        value: event.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(Html);
