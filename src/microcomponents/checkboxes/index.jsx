import React from 'react';
import { Checkbox as CoreCheckboxGroup } from 'antd';
import Checkbox from 'microcomponents/checkbox';

function Checkboxs({ data }) {
  return (
    <CoreCheckboxGroup.Group>
      {data !== undefined &&
        data.map((item, index) => (
          <>
            <Checkbox value={item.title || item.id} key={index}>
              {item.title}
            </Checkbox>
            <br />
          </>
        ))}
    </CoreCheckboxGroup.Group>
  );
}

export default Checkboxs;
