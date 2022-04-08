import React, { useState } from 'react';

export const CountFunc = (props: number) => {
  const [count, setCount] = useState(props);
  return { count, setCount };
};
