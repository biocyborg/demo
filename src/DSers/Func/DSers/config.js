module.exports = {
  /**
   * 获取用户密钥
   */
  ApiKey: '/api/v1/woo/apikey?store_id=',

  /**
   * 验证店铺是否可以绑定
   * ?domain=https://neuraleague.com&version=1.0.3
   */
  VerifyStore: '/api/v1/woo/bind',

  /**
   * 保存从woo获取的商品信息
   */
  StorageProducts: '/api/v1/woo/js/product/pull',
};
