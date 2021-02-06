import React, { Fragment, useState } from 'react';
import { Radio, Cell, Panel, Input, Button, Modal, Message } from 'zarm';
import { useImmer } from 'use-immer';
import BaseShow from './BaseShow'

// ['5','10','20'] 目前包含的分值有
const fenList = ['5', '10', '20'];
const App = () => {
  const [state, setState] = useImmer({
    family: '',
    socure: '',
    house: '',
    buyHouse: '',
  });

  const [value, setValue] = useState(null);
  const { family, socure, house, buyHouse } = state;

  const baseScore = () => {
    let count = 0;
    for (let i in state) {
      const itemValue = state[i];
      if (fenList.includes(itemValue)) {
        count = count + +itemValue;
      }
    }
    return count;
  };
  const policyScore = () => {
    if (!value) return 0;
    const result = value * 0.1;
    return result;
  };

  const statistical = () => {
    const result = baseScore() + policyScore();
    const modal = Modal.alert({
      className: 'test',
      title: '提示',
      content: `你当前的分数是 ${result} 分`,
      onCancel: () => {
        modal.hide();
      },
    });
  };

  const baseList = [
    {
      title: '家庭情况',
      value: family,
      list: [
        { key: '10', value: '家庭 (10分)' },
        { key: '0', value: '单身 (0分)' },
      ],
      onChange: (value) => {
         setState((dragy) => { dragy.family = value;});
      }
    },
     {
      title: '户籍情况',
      value: socure,
      list: [
        { key: '10', value: '上海户口 (10分)' },
        { key: '0', value: '非上海户口 (0分)' },
      ],
      onChange: (value) => {
         setState((dragy) => { dragy.socure = value;});
      }
    },
    {
      title: '房产情况',
      value: house,
      list: [
        { key: '20', value: '上海无房 (20分)' },
        // { key: '0', value: '上海有房 (0分)' },
        { key: '5', value: '上海有房 (5分)' },
      ],
      onChange: (value) => {
         setState((dragy) => { dragy.house = value;});
      }
    },
    {
      title: '五年内购房情况',
      isCell:  true,
      value: buyHouse,
      list: [
        { key: '20', value: '无房，5年内无购房记录 (20分)' },
        { key: '5', value: '有房，5年内无购房记录 (5分)' },
        { key: '0', value: '无房，5年有有购房记录 (0分)' },
        { key: '1', value: '有房，5年内有购房记录 (0分)' },
      ],
      onChange: (value) => {
         setState((dragy) => { dragy.buyHouse = value;});
      }
    },
  ];

  return (
    <Fragment>
      <div className="container">
        <Message theme="danger" size="lg"> 上海买房积分计算器</Message>
        <BaseShow data={baseList}></BaseShow>
        <Panel title="2003年1月起到现在的累计社保月数">
          <div className="box">
            <Cell title="社保月数">
              <Input
                type="number"
                value={value}
                placeholder="请输入月数"
                onChange={(value) => {
                  setValue(value);
                }}
              />
            </Cell>
          </div>
        </Panel>

        <Button
          block
          theme="primary"
          style={{ marginTop: '60px' }}
          onClick={statistical}
        >
          计算分数
        </Button>
      </div>
    </Fragment>
  );
};

export default App;
