import { DefineXMLHttpRequestGET, WooApi } from '../../../Core';
import { updateDomain } from '../Utils';
import { VerifyStore } from '../config';

/**
 *
 * @param { String } domain api 域名
 * @param { String } storeId 用户店铺id
 * @returns { Object } woo 密钥
 */
export async function getVerifyStore(domain, shop, version = '1.0.3') {
  try {
    const result = await DefineXMLHttpRequestGET(
      `${await updateDomain(domain)}${VerifyStore}?domain=${shop}&version=${version}`,
    );
    console.log(result);
    if (result.code === 2000) {
      console.log(result.data);
    }
  } catch (error) {
    console.log(error);
  }
}
