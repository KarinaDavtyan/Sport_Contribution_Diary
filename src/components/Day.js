import React from 'react';
import { css } from '@emotion/core';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const box_day = css({
  height: '12vw',
  width: '12vw',
  backgroundColor: 'white',
  border: 'solid 1px hotpink',
  color: 'lightslategray',
  fontFamily: 'Staatliches',
  fontSize: '1em',
  padding: '0.3vh',
  overflowX: 'scroll'
});


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    itemType: monitor.getItemType()
  };
}
const boxTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.onDrop(item);
    return item;
  },
};

const Day = ({connectDropTarget, ...props}) => {
  return connectDropTarget(
    <div>
      <div
        css={box_day}
      >
        {props.events && props.events.map(event => (
          <div
            key={event}
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropTarget(ItemTypes.Tag, boxTarget, collect)(Day);
