import React, { Fragment, useState } from 'react';
import { Radio, Cell, Panel, Input, Button, Modal, Message } from 'zarm';
import { useImmer } from 'use-immer';

// ['5','10','20'] 目前包含的分值有
const fenList = ['5', '10', '20'];
const APP = () => {
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

  const heji = () => {
    const result = baseScore() + policyScore();
    console.log(result);

    const modal = Modal.alert({
      className: 'test',
      title: '提示',
      content: `你当前的分数是 ${result} 分`,
      onCancel: () => {
        modal.hide();
      },
    });
  };

  return (
    <Fragment>
      <div className="container">
        <Message theme="danger" size="lg">
          上海买房积分计算器
        </Message>
        <Panel title="家庭情况">
          <div className="box">
            <Cell>
              <Radio.Group
                value={family}
                onChange={(value) => {
                  setState((dragy) => {
                    dragy.family = value;
                  });
                }}
              >
                <Radio value="10">家庭 (10分)</Radio>
                <Radio value="0">单身 (0分)</Radio>
              </Radio.Group>
            </Cell>
          </div>
        </Panel>
        <Panel title="户籍情况">
          <div className="box">
            <Cell>
              <Radio.Group
                value={socure}
                onChange={(value) => {
                  setState((dragy) => {
                    dragy.socure = value;
                  });
                }}
              >
                <Radio value="10">上海户口 (10分)</Radio>
                <Radio value="0">非上海户口 (0分)</Radio>
              </Radio.Group>
            </Cell>
          </div>
        </Panel>
        <Panel title="房产情况">
          <div className="box">
            <Cell>
              <Radio.Group
                value={house}
                onChange={(value) => {
                  setState((dragy) => {
                    dragy.house = value;
                  });
                }}
              >
                <Radio value="20">上海无房 (20分)</Radio>
                <Radio value="0">上海有房 (0分)</Radio>
              </Radio.Group>
            </Cell>
          </div>
        </Panel>
        <Panel title="五年内购房情况">
          <div className="box">
            <Radio.Group
              type="cell"
              value={buyHouse}
              onChange={(value) => {
                setState((dragy) => {
                  dragy.buyHouse = value;
                });
              }}
            >
              <Radio value="20">无房，5年内无购房记录 (20分)</Radio>
              <Radio value="5">有房，5年内无购房记录 (5分)</Radio>
              <Radio value="0">无房，5年有有购房记录 (0分)</Radio>
              <Radio value="1">有房，5年内有购房记录 (0分)</Radio>
            </Radio.Group>
          </div>
        </Panel>
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

        {/* <Button block theme="primary" onClick={jisuan}>计算分数</Button> */}
        <Button block theme="primary" style={{marginTop: '50px'}} onClick={heji}>
          计算分数
        </Button>
      </div>
    </Fragment>
  );
};

export default APP;
