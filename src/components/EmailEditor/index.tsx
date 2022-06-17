import React, { useRef } from 'react';

import styles from 'index.module.scss';

import EmailEditor from 'react-email-editor';

interface test {
  editor: {
    exportHtml(callbackfn: (data: { html: string }) => void): void;
  };
}

const Email_Editor = () => {
  const emailEditorRef = useRef<test>();

  const exportHtml = () => {
    emailEditorRef?.current?.editor.exportHtml((data) => {
      console.log('234', data);
    });
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
