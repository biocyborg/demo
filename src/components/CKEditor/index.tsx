import * as React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from './index.module.scss';

console.log(styles);

const editorConfiguration = {
  toolbar: {
    items: [
      // 标题 加粗 斜体 撤销 重做 超链接 项目符号列表 项目编号列表
      'heading',
      '|',
      'bold',
      'italic',
      'undo',
      'redo',
      'link',
      'bulletedList',
      'numberedList',
      // 插入表格 块引用
      '|',
      'insertTable',
      'blockQuote',
      // 插入图像 更改图片替换文本 图片通栏显示 图片侧边显示
      // '|',
      // 'imageUpload',
      // 'imageTextAlternative',
      // 'imageStyle:full',
      // 'imageStyle:side'
    ],
    // 工具栏自动换行
    shouldNotGroupWhenFull: false,
  },
  // // 标题样式
  // heading: {
  //   options: [
  //     { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
  //     {
  //       model: 'heading1',
  //       view: 'h1',
  //       title: 'Heading 1',
  //       class: 'ck-heading_heading1'
  //     },
  //     {
  //       model: 'heading2',
  //       view: 'h2',
  //       title: 'Heading 2',
  //       class: 'ck-heading_heading2'
  //     }
  //   ]
  // },
  // // 表格样式
  // table: {
  //   contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  // },
  // // upload
  // ckfinder: {
  //   uploadUrl: '/图片上传服务器地址'
  // }
};

const CKEditors = () => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data="324rtertert"
      // onReady={(editor) => {
      //   console.log('Editor is ready to use!', editor);
      // }}
      // onChange={(event, editor) => {
      //   const data = editor.getData();
      //   console.log(data);
      //   const { onChange } = this.props;
      //   this.setState({ value: data });

      //   if (onChange) {
      //     onChange(data);
      //   }
      //   console.log({ event, editor, data });
      // }}
      // onBlur={(event, editor) => {
      //   console.log('Blur.', editor);
      // }}
      // onFocus={(event, editor) => {
      //   console.log('Focus.', editor);
      // }}
    />
  );
};

export default CKEditors;
