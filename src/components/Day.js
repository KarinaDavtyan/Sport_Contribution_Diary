import React from 'react';
import { css } from '@emotion/core';
import posed from 'react-pose';
import { spring } from 'popmotion';

const box_day = css({
  height: '12vw',
  width: '12vw',
  backgroundColor: 'white',
  border: 'solid 1px hotpink'
});

const Day = () => {
  return (
    <div
      css={box_day}
    />
  );
};

export default Day;