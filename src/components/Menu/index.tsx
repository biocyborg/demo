import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.box}>
        <Button variant="contained" onClick={() => navigate('/editImg')}>
          EditImg
        </Button>
        <Button variant="contained" onClick={() => navigate('/canvas')}>
          Canvas
        </Button>
        <Button variant="contained" onClick={() => navigate('/ckeditor')}>
          CKEditor
        </Button>
        <Button variant="contained" onClick={() => navigate('/hooks')}>
          hooks
        </Button>
        <Button variant="contained" onClick={() => navigate('/html')}>
          Html
        </Button>
        <Button variant="contained" onClick={() => navigate('/DSers')}>
          DSers
        </Button>
        <Button variant="contained" onClick={() => navigate('/EmailEditor')}>
          EmailEditor
        </Button>
        <Button variant="contained" onClick={() => navigate('/WebWorker')}>
          WebWorker
        </Button>
        <Button variant="contained" onClick={() => navigate('/ServiceWorker')}>
          ServiceWorker
        </Button>
        <Button variant="contained" onClick={() => navigate('/Woocommerce')}>
          Woocommerce
        </Button>
      </div>
    </>
  );
};

export default Menu;
