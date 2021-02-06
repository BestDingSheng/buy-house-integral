import React, { Fragment } from 'react';
import { Radio, Cell, Panel, } from 'zarm';

const BaseShow = (props) => {
  const {data} = props;
  return (
    <Fragment>
      {data.map((item) => {
          const { title, value, list, onChange, isCell } = item;
        return (
          <Panel title={title} key={title}>
            <div className="box">
              {
                isCell ? 
                <Radio.Group type='cell' value={value} onChange={(val) => {
                    onChange(val)
                }}>
                  {list.map((itemK) => {
                    return <Radio value={itemK.key} key={itemK.key}>{itemK.value}</Radio>;
                  })}
                </Radio.Group> :
                <Cell>
                  <Radio.Group value={value} onChange={(val) => {
                      onChange(val)
                  }}>
                    {list.map((itemK) => {
                      return <Radio value={itemK.key} key={itemK.key}>{itemK.value}</Radio>;
                    })}
                  </Radio.Group>
              </Cell>
              }
        
            </div>
          </Panel>
        );
      })}
    </Fragment>
  );
};

export default BaseShow;
