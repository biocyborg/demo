import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import EditImg from './components/EditImg';
import Canvas from './components/Canvas';
import CKEditor from './components/CKEditor';
import Menu from './components/Menu';
import Hooks from './components/Hooks';
import Html from './components/Html';
import DSers from './components/DSers';
import EmailEditor from './components/EmailEditor';
import WebWorker from './components/WebWorker';
import ServiceWorker from './components/ServiceWorker';
import Woocommerce from './components/Woocommerce';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route key="editImg" path="/editImg" element={<EditImg />} />
        <Route key="canvas" path="/canvas" element={<Canvas />} />
        <Route key="ckeditor" path="/ckeditor" element={<CKEditor />} />
        <Route key="hooks" path="/hooks" element={<Hooks />} />
        <Route key="html" path="/html" element={<Html />} />
        <Route key="DSers" path="/DSers" element={<DSers />} />
        <Route key="EmailEditor" path="/EmailEditor" element={<EmailEditor />} />
        <Route key="WebWorker" path="/WebWorker" element={<WebWorker />} />
        <Route key="ServiceWorker" path="/ServiceWorker" element={<ServiceWorker />} />
        <Route key="Woocommerce" path="/Woocommerce" element={<Woocommerce />} />
        <Route path="/" element={<Navigate replace to="/editImg" />} />
      </Routes>
    </>
  );
}

export default App;
