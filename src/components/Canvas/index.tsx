import * as React from 'react';
import styles from './index.module.scss';

const Canvas = () => {
  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFiles = e.target.files;

    [].forEach.call(imgFiles, (item) => {
      // 压缩图片需要的一些元素和对象
      const reader = new FileReader(),
        img = new Image();
      // 缩放图片需要的canvas
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const imgType: { type: string | string[] } = item;
      if (imgType.type.indexOf('image') === 0) {
        reader.readAsDataURL(item);
      }

      // 文件base64化，以便获知图片原始尺寸
      reader.onload = function (e) {
        img.src = e?.target?.result as string;
      };

      img.onload = function () {
        // 图片原始尺寸
        const originWidth = img.width;
        const originHeight = img.height;
        // 最大尺寸限制
        const maxWidth = 960;
        const maxHeight = 960;
        // 目标尺寸
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        // 图片尺寸超过960x960的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context?.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context?.drawImage(img, 0, 0, targetWidth, targetHeight);
        const type = 'image/jpeg';
        //将canvas元素中的图像转变为DataURL
        const dataurl = canvas.toDataURL(type);
        //抽取DataURL中的数据部分，从Base64格式转换为二进制格式
        const bin = atob(dataurl.split(',')[1]);
        //创建空的Uint8Array
        const buffer = new Uint8Array(bin.length);
        //将图像数据逐字节放入Uint8Array中
        for (let i = 0; i < bin.length; i += 1) {
          buffer[i] = bin.charCodeAt(i);
        }
        //利用Uint8Array创建Blob对象
        const blob = new Blob([buffer.buffer], { type: type });
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        // 将base64转换为file类型 可能有兼容问题
        const arr = dataurl.split(',') || [],
          baseData = arr[0].match(/:(.*?);/),
          mime = baseData ? baseData[1] : '',
          bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while ((n -= 1)) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        console.log(new File([u8arr], 'haha', { type: mime }));
      };
    });
  };

  return (
    <>
      <div className={styles.image}>
        <input
          type="file"
          name="filename"
          accept="image/gif,image/png,image/jpg,image/jpeg"
          onChange={(e) => uploadImg(e)}
          multiple
          className={styles.input}
        />
        Upload images from my computer
      </div>
    </>
  );
};

export default Canvas;
