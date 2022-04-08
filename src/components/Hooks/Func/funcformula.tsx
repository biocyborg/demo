import React, { useState } from 'react';

export const FuncFormulaFunc = (props: Record<string, never>) => {
  const [state, setState] = useState(props);
  const setStateFunc = (value: any) => {
    setState((prevState) => {
      return { ...prevState, ...value };
    });
  };
  return { state, setState, setStateFunc };
};
