import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './listcard.css';

import { listSelection } from '../../state/actions/listAction';

export default function ListCard() {
  const listData = useSelector(state => state.list.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSelection());
  }, []);

  const arrFromObject = () => {
    const newArr = Object.values(listData);
    const filterArr = [];
    for (let i = 0; i < 5; i++) {
      filterArr.push(newArr[i]);
    }
    return filterArr;
  };

  return (
    <div className="listWrap">
      <div className="title">Top 5 State Police Use of Force</div>
      <div className="listData">
        {listData &&
          arrFromObject().map((item, index) => {
            return (
              <div className="value">
                <div> {index + 1} </div>
                <div>State: {item.State} </div>

                <div className="countColor">Counts: {item.Counts} </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
