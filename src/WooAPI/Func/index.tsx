import { fetchCors } from '../fetchFromExtension';

async function PluginRun(payload: {
  url: string;
  type: string;
  version?: string;
  domain: any;
  key: any;
  secret: any;
  data: any;
}) {
  try {
    const re: any = await fetchCors(payload);
    const {
      type,
      data: { result },
    } = re;
    if (type === 'dsersCorsFetchResponse') {
      if (result.status === 200) {
        return {
          status: result.status,
          headers: result.headers,
          data: result.data,
        };
      } else {
        return {
          status: result.status,
          data: result.data,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * @function 创建
 * @description 这个Func帮助您创建。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { Object } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedCreate(payload: { url: string; request: any; data?: any }) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'post', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.post(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}

/**
 * @function 检索
 * @description 这个Func允许您通过ID检索和查看。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { Object } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedRetrieve(payload: { url: string; request: any; data?: any }) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'get', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.get(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}

/**
 * @function 所有列表
 * @description 这个Func帮助您查看所有数据。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { Object } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedListAll(payload: { url: string; request: any; data?: any }) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'get', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.get(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}

/**
 * @function 更新
 * @description 这个Func允许您对数据进行更改。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { Object } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedUpdate(payload: { url: string; request: any; data?: any }) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'put', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.put(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}

/**
 * @function 删除
 * @description 这个Func帮助您删除。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { Object } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedDelete(payload: { url: string; request: any; data?: any }) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'delete', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.delete(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}
// interface RequestConfig {
//   url: string;
//   consumerKey: string;
//   consumerSecret: string;
//   post: (T, R) => void;
// }

// interface DefinedBatchConfig {
//   url: string;
//   request: RequestConfig;
//   data: Record<string, number>;
// }

/**
 * @function 批量操作
 * @description 这个Func帮助您批量创建、更新和删除多个数据。
 * @param { payload { url: { string } API地址, request: { Object } 通过RestApi生成的对象, data: { create?: Array<Object>; update?: Array<Object>; delete?: Array<Object>; } 请求参数} }
 * @returns { Object { status: {string} 接口状态, headers: { Object } 响应头, data: { any } 响应数据 } }
 */
export async function DefinedBatch(payload: any) {
  const { url, request, data } = payload;

  const obj = {
    url, // 请求地址
    type: 'post', // 请求方式
    version: 'wc/v3', // API版本，默认为v3
    domain: request.url, // Woo店铺域名
    key: request.consumerKey, // Woo授权的key
    secret: request.consumerSecret, // Woo授权的secret
    data: { ...data }, // 请求数据,
  };

  try {
    const result = await request.post(url, data);
    if (result.status === 200) {
      return {
        status: result.status,
        headers: result.headers,
        data: result.data,
      };
    }
  } catch (error: any) {
    if (!error.response) {
      return await PluginRun(obj);
    }
    return {
      status: error.response.result.status,
      data: error.response.result.data,
    };
  }
}
