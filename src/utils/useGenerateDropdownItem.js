import React, { useEffect, useState } from 'react';
import { Select } from "antd";


function useGenerateDropdownItem(list, key, value, displayValue) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (list) {
      let arr = [];
      if (list.length > 0) {
        list.forEach((item, i) => {
          arr.push(
            <Select.Option
              key={key ? list[i][key] : list[i]}
              value={value ? list[i][value] : typeof list[i] === 'object' ? `${i}` : list[i]}
              disabled={list[i]?.disabled}
            >
              {displayValue ? list[i][displayValue] : list[i]}
            </Select.Option>
          );
        });
      } else {
        Object.keys(list).forEach((k, val) => {
          arr.push(
            <Select.Option key={k} value={k}>
              {displayValue ? list[k][displayValue] : list[k]}
            </Select.Option>
          )
        })
      }
      setData(arr);
    }
  }, [list, key, value, displayValue])

  return data;
};

export default useGenerateDropdownItem;
