function getDsersCorsExtensionId() {
  const testId = window.localStorage.getItem('happy_extension_test');
  return testId || '';
}

const { chrome } = window;

/**
 * 定义在插件中的方法
 * @param {'fetchCors'|'fetchWpjson'} action
 * @param { Object } actionParams 抓取参数
 * @param {number} timeout 超时时间
 */

const sendFetchRequestToExtension = (
  action: 'fetchCors' | 'fetchWpjson',
  actionParams: Record<string, unknown>,
  timeout = 10000,
) => {
  if (!chrome || !action) {
    return Promise.reject();
  }
  const extId = getDsersCorsExtensionId();

  const params = {
    action,
    actionParams,
    timeout: timeout - 500,
  };
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(extId, { type: 'WooCorsFetchRequest', params, actionParams }, (res: unknown) => {
      if (chrome.runtime.lastError) {
        // reject(chrome.runtime.lastError);
        console.log(chrome.runtime.lastError);
      }
      if (!res) {
        reject();
      } else {
        resolve(res);
      }
    });
  });
};

// 委托WooPlugIn发送跨域请求
export async function fetchCors(params: {
  url: string;
  type: string;
  domain: string;
  key: string;
  secret: string;
  data: Record<string, unknown>;
}) {
  try {
    const result = await sendFetchRequestToExtension('fetchCors', params);
    return result;
  } catch (error) {
    return { error: 'extension_fetch_error' };
  }
}
