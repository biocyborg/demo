/// <reference types="react-scripts" />

interface Window {
  chrome: {
    runtime: {
      sendMessage: Function;
      lastError: any;
    };
  };
}

declare module 'jsbn';
declare module 'json-bigint';
declare module 'react-email-editor';
declare module '@ckeditor/ckeditor5-react';
declare module '@ckeditor/ckeditor5-build-classic';
declare module '@woocommerce/woocommerce-rest-api';
