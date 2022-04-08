import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

function axiosConfig() {
  return {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  };
}

/**
 *
 * @param url 你的商店URL，例如:http://dsers.com/  (必填)
 * @param consumerKey 您的 API 使用者密钥  (必填)
 * @param consumerSecret 您的 API 使用者机密  (必填)
 * @param queryStringAuth 当使用HTTPS强制基本认证作为查询字符串时，默认为false
 * @param timeout 定义请求超时
 * @param config 定义自定义Axios配置
 * @returns
 */

function WooApi(
  url: string,
  consumerKey: string,
  consumerSecret: string,
  queryStringAuth = true,
  timeout = 120000,
  config = axiosConfig(),
) {
  return new WooCommerceRestApi({
    url,
    consumerKey,
    consumerSecret,
    queryStringAuth,
    timeout,
    axiosConfig: config,
  });
}

export default WooApi;
