import React, { useState } from 'react';

export const RealTimeFunc = (props: number) => {
  const [realTime, setRealTime] = useState(props);
  const [age, set_age] = useState(0);
  const add_age = (val: number) => {
    set_age((data) => {
      const new_data = (data = val);
      set_num_handle(new_data);
      return new_data;
    });
    console.log(realTime);
  };
  const set_num_handle = (new_data: React.SetStateAction<number>) => {
    setRealTime(new_data);
  };

  const setRealTimeFunc = () => {
    add_age(1234);
    console.log(realTime);
    console.log(age);
  };
  return { realTime, setRealTimeFunc };
};
