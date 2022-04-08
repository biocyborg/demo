/*
 * Created Date: Saturday February 20th 2021
 * Author: William (cweiliang.me@gmail.com)
 */

// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

const primaryColor = 'rgba(255, 143, 0, 1)';
const primaryTextColor = 'rgba(0, 0, 0, 0.5)';

module.exports = {
  // base
  '@primary-color': primaryColor, // 全局主色
  '@border-radius-base': '8px', // 组件/浮层圆角
  '@text-color': primaryTextColor, // 主文本色
  '@border-color-base': '#dde0e2', // 边框色
  '@link-color': primaryTextColor, // 链接色

  // layout
  '@layout-body-background': '#ECEFF1',
  '@layout-sider-background': '#ECEFF1',

  // menu
  '@menu-icon-size': '18px',

  // header
  '@layout-header-background': 'white',
  '@layout-header-height': '72px',
  '@layout-header-padding': '0 25px',

  // buttons
  '@btn-height-base': '36px',
  '@btn-border-radius-sm': '4px',

  // select
  '@select-border-color': '#E0E0E0',
  '@select-dropdown-vertical-padding': '12px',
  '@dropdown-vertical-padding': '12px',
  '@dropdown-edge-child-vertical-padding': '8px',

  // card
  '@card-radius': '12px',
  '@card-padding-base': '12px',

  // checkbox
  '@checkbox-border-width': '2px',
  '@checkbox-size': '18px',

  // modal
  '@modal-header-border-width': 0,
  '@modal-header-padding': '24px 24px',
  '@modal-footer-border-width': 0,
  '@modal-footer-padding-vertical': '24px',
  '@modal-footer-padding-horizontal': '24px',
  '@modal-body-padding': '4px 24px',
  '@modal-confirm-body-padding': '24px',

  //table
  '@table-bg': '#fafafa',
  '@table-row-hover-bg': '#eee',
  '@table-border-radius-base': '12px',
  '@table-padding-vertical': '8px',
  '@table-padding-horizontal': '12px',

  // collapse
  '@collapse-header-padding': '12px 0',

  // radio
  '@radio-size': '20px',
  '@radio-border-width': '2px',

  // input
  '@input-color': 'rgba(0, 0, 0, 0.88)',
};
