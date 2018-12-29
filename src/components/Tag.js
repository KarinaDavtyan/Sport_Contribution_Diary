import React from 'react';
import { css } from '@emotion/core';
import { DragSource } from 'react-dnd';

import { ItemTypes } from './Constants';


const tag = css({
  color: 'hotpink',
  fontSize: '3em',
  fontFamily: 'Staatliches'
});

const tagSource = {
  beginDrag() {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Tag = ({ connectDragSource }) => {
  return connectDragSource(
    <div>
      <div
        css={tag}
      >
        #bouldering
      </div>
    </div>
  );
};

export default DragSource(ItemTypes.Tag, tagSource, collect)(Tag);


