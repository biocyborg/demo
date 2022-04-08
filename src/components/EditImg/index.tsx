import * as React from 'react';
import ImageEditor from 'tui-image-editor';

import 'tui-image-editor/dist/tui-image-editor.css';
import styles from './index.module.scss';

const { useRef, useEffect } = React;

console.log(styles);

const EditImg = () => {
  const instance = useRef<ImageEditor>();
  useEffect(() => {
    instance.current = new ImageEditor(document.querySelector('#editorImage') || '', {
      includeUI: {
        loadImage: {
          path: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2496571732,442429806&fm=26&gp=0.jpg',
          name: 'EditImg',
        },
        menu: ['shape', 'filter', 'crop', 'flip', 'rotate', 'draw', 'icon', 'text', 'mask'],
        initMenu: 'filter',
        uiSize: {
          width: '100%',
          height: '100%',
        },
        menuBarPosition: 'bottom',
      },
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
    });
  }, []);

  return (
    <>
      <div id="editorImage" />
    </>
  );
};

export default EditImg;
