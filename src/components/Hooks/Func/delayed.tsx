import React, { useState } from 'react';

export const DelayedFunc = (props: number) => {
  const [delayed, setDelayed] = useState(props);
  const setDelayedFunc = () => {
    setDelayed(1234);
    console.log(delayed);
  };
  return { delayed, setDelayedFunc };
};
