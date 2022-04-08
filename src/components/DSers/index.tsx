import * as React from 'react';

import { Button } from '@mui/material';

import {
  DefineXMLHttpRequestGET,
  DefineSplitURL,
  WooApi,
  CreateProducts,
  UpdateProducts,
  FuncCreate,
  FuncUpdate,
  CreateProductVariation,
  RetrieveProducts,
  FuncRetrieve,
} from '../../DSers/DS_Interact_Woo/Core';

import { HandlingImageRequest } from '../../DSers/DS_Interact_Woo/Utils';

import { DeleteSurplusData } from '../../DSers/DS_Interact_Woo/Utils/Surplus';

import zz from '../../DSers/zz.json';

const DSers = () => {
  const RestAPI = async () => {
    try {
      if (zz.code === 2000) {
        const {
          data: { domain, key, secret, products, store_id },
        } = zz;

        let isPlugin = false;
        const request = await WooApi(domain, key, secret);

        for (let i = 0; i < products.length; i++) {
          // 当前商品请求出错进入下一个商品
          let next = false;

          // 记录已经推送的图片防止图片重复推送(AE图片地址重复)
          let imgObject: any = {};

          // 深拷贝主商品
          let product = JSON.parse(JSON.stringify(products[i].product));
          // 清空主商品图片库
          product.images = [];
          // 当前商品图片
          const images = products[i].product.images;

          // 放置推送完成的variations
          const variationsResult = [];
          // 当前商品的variations
          const variations = products[i].product_variation.variations;

          // 推送主商品 循环图片 有多少张图片就推送多少次 // products[i].product;
          for (let index = 0; index < images.length; index++) {
            const item = JSON.parse(JSON.stringify(images[index]));

            if (item.src.indexOf('images.dsers.com') > -1) {
              if (imgObject[`${item.src}-${store_id}`]) {
                product.images.push(imgObject[`${item.src}-${store_id}`]);
              } else {
                product.images.push(item);
              }
            } else {
              const result = await HandlingImageRequest(item.src);
              if (!result) {
                continue;
              }
              if (imgObject[`${result}-${store_id}`]) {
                product.images.push(imgObject[`${result}-${store_id}`]);
              } else {
                product.images.push({ src: result });
              }
            }

            if (index) {
              const obj = {
                url: await UpdateProducts(product.id),
                request,
                data: product,
                isPlugin,
              };

              const result: any = await FuncUpdate(obj);
              if (result.status === 200) {
                isPlugin = result.isPlugin;
                if (!Object.keys(imgObject).includes(`${item.src}-${store_id}`)) {
                  imgObject[`${item.src}-${store_id}`] = result.data.images[index];
                }
                product = await DeleteSurplusData(result.data);
              } else {
                console.log(result);
              }
            } else {
              const obj = {
                url: await CreateProducts(),
                request,
                data: product,
                isPlugin,
              };

              const result: any = await FuncCreate(obj);
              if (result.status === 201) {
                isPlugin = result.isPlugin;
                imgObject = {
                  [`${item.src}-${store_id}`]: result.data.images[index],
                };
                product = await DeleteSurplusData(result.data);
              } else {
                console.log(result);
                next = true;
              }
            }
          }

          if (next) {
            continue;
          }

          // 推送variations有多少个推送多少次 // products[i].product_variation
          for (let index = 0; index < variations.length; index++) {
            const variation = variations[index];
            if (variation?.image?.src && imgObject[`${variation.image.src}-${store_id}`]) {
              variation.image = imgObject[`${variation?.image?.src}-${store_id}`];
            } else if (variation?.image) {
              if (variation.image.src.indexOf('images.dsers.com') === -1) {
                const result = await HandlingImageRequest(variation.image.src);
                if (!result) {
                  variation.image = { src: '', name: '' };
                } else {
                  variation.image = { src: result, name: variation.image.name };
                }
              }
            }
            const obj = {
              url: await CreateProductVariation(product.id),
              request,
              data: variation,
              isPlugin,
            };

            const result: any = await FuncCreate(obj);
            if (result.status === 201) {
              isPlugin = result.isPlugin;
              variationsResult.push(result.data);
            } else {
              console.log(result);
              next = true;
            }
          }

          if (next) {
            continue;
          }

          const obj = {
            url: await RetrieveProducts(product.id),
            request,
            isPlugin,
          };

          const result: any = await FuncRetrieve(obj);
          if (result.status === 200) {
            console.log(result.data);
          } else {
            console.log(result);
            next = true;
          }

          if (next) {
            continue;
          }

          //
        }
      }
      // const str = 'https://yanghuichao.com';
      // console.log(str);
      // const url = await DefineSplitURL(str);
      // console.log(url);
      // console.log(str);
      // // const url = await DefineSplitURL('https://atc.dsers.com/', 'api/v1/users/info');
      // const result = await DefineXMLHttpRequestGET(url);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const Img = async () => {
    try {
      const result = await HandlingImageRequest('https://ae04.alicdn.com/kf/Hcf4bc2291455427da15d3945d76c62a0m.jpg');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteSurplus = async () => {
    try {
      const obj = {
        a: 'a',
        b: 'b',
        c: 'c',
        lang: 'us',
        author_info: {
          cc: 'cc',
        },
      };
      const result = await DeleteSurplusData(obj);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const Test = () => {
    const laserExtensionId = localStorage.getItem('happy_extension_test');
    const { chrome } = window;

    // const obj = {
    //   domain: 'https://zmlbright.cn/',
    //   url: '/wp-json/wc/v3/products',
    //   method: 'GET',
    //   consumer_key: 'ck_a964d2cb41c04034e66a8524f6d5b969a7a04cf4',
    //   consumer_secret: 'cs_5cbecc8639e25e4709a87c2821aba35f9ce1c4c4',
    //   data: {
    //     page: 1,
    //     per_page: 20,
    //   },
    // };

    const obj = {
      domain: 'https://zmlbright.cn/',
      url: '/wp-json',
      method: 'GET',
    };

    chrome.runtime.sendMessage(
      laserExtensionId,
      { type: 'WooFetchRequest', getTargetData: obj },
      function (response: any) {
        console.log(response);
      },
    );
  };

  return (
    <>
      <Button variant="contained" onClick={RestAPI}>
        RestAPI
      </Button>
      <Button variant="contained" onClick={Img}>
        Img
      </Button>
      <Button variant="contained" onClick={DeleteSurplus}>
        DeleteSurplus
      </Button>
      <Button variant="contained" onClick={Test}>
        Test
      </Button>
    </>
  );
};

export default DSers;
