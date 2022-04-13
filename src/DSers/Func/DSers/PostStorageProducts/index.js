import { DefineXMLHttpRequestGET, WooApi } from '../../../Core';
import { updateDomain } from '../Utils';
import { ApiKey } from '../config';

/**
 *
 * @param { String } domain api 域名
 * @param { String } storeId 用户店铺id
 * @returns { Object } woo 密钥
 */
export async function postStorageProducts(domain, storeId) {
  try {
    // const result = await DefineXMLHttpRequestGET(`${await updateDomain(domain)}${ApiKey}${storeId}`);
    // console.log(result);
    // if (result.code === 2000) {
    //   console.log(result.data);
    //   const { domain, key, secret, store_id } = result.data;
    //   console.log(WooApi(domain, key, secret));
    // }
  } catch (error) {
    console.log(error);
  }
}
