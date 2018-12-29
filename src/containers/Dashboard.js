import React from 'react';
import { css } from '@emotion/core';
import posed from 'react-pose';
import { spring } from 'popmotion';

const container = css({
  display: 'flex',
  padding: 0,
  height: '100vh',
  flexDirection: 'column',
});

const image = css({
  height: '5vh',
  width: '5vh',
  display: 'block',
  zIndex: 2
});

const header = css({
  width: '100vw',
  height: '3vh',
  background: 'hotpink',
  display: 'flex',
  paddingTop: 0,
  justifyContent: 'center'
});

const container_week = css({
  height: '40vh',
  width: '100vw',
  display: 'flex',
  background: 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)',
  justifyContent: 'space-evenly',
  alignItems: 'center'
});

const container_day = css({
  height: '12vw',
  width: '12vw',
  backgroundColor: 'white',
  border: 'solid 1px hotpink'
});

const Ball = posed.img({
  draggable: 'y',
  dragBounds: { top: 0, bottom: 50 },
  dragEnd: { transition: spring }
});


const Dashboard = () => {
  return (
    <div
      css={container}
    >
      <div
        css={header}
      >
        
        <Ball
          css={image}
          src={require('../assets/soccer-ball-96.png')} />
      </div>
      <div
        css={container_week}
      >
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
        <div
          css={container_day}
        />
      </div>
    </div>
  );
};

export default Dashboard;
