import React, { useRef } from 'react';

import styles from 'index.module.scss';

import EmailEditor from 'react-email-editor';

const Email_Editor = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    console.log(emailEditorRef.current);
    // const {
    //   current: {
    //     editor: { exportHtml },
    //   },
    // } = emailEditorRef;
    // exportHtml((data: { design: any; html: any }) => {
    //   const { design, html } = data;
    //   console.log('exportHtml', html);
    // });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </div>
  );
};

export default Email_Editor;
