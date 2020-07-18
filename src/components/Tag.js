import React from 'react';
import { css } from '@emotion/core';
import { DragSource } from 'react-dnd';

import { ItemTypes } from './Constants';


const tag = css({
  color: 'hotpink',
  fontSize: '3em',
  fontFamily: 'Staatliches',
  cursor: 'grab',
});

const tagSource = {
  beginDrag(props) {
    const item = { id: props.tag };
    return item;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    getItem: monitor.getItem()
  };
}

const Tag = ({ connectDragSource, ...props }) => {
  return connectDragSource(
    <div>
      <div
        css={tag}
      >
        {props.tag}
      </div>
    </div>
  );
};

export default DragSource(ItemTypes.Tag, tagSource, collect)(Tag);


