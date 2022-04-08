import React, { useState } from 'react';

const Hooks = () => {
  const [num, set_num] = useState(0);
  const [age, set_age] = useState(0);
  const add_age = () => {
    set_age((data) => {
      const new_data = data + 1;
      set_num_handle(new_data);
      return new_data;
    }); //使用函数，而不是固定值，将最新值传给要处理的函数，并返回给这个设置值的函数
  };
  const set_num_handle = (new_data: React.SetStateAction<number>) => {
    set_num(new_data);
  };
  return (
    <div>
      <div>年龄:{age}</div>
      <div>
        <button onClick={add_age}>设置{num}</button>
      </div>
    </div>
  );
};

export default Hooks;
