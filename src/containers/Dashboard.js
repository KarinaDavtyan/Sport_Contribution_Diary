import React from 'react';
import { css } from '@emotion/core';
import posed from 'react-pose';
import { spring } from 'popmotion';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import moment from 'moment';

import Day from '../components/Day';

const week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

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
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center'
});

const day_name = css({
  color: 'white',
  fontFamily: 'Staatliches',
  fontSize: '1.5em'
})

const container_tags = css({
  // background: 'rgb(243, 243, 243)',
  width: '100vw',
  height: '25vh',
  padding: '0 5vw 0 5vw'
});

const heatmap = css({
  width: '90vw',
  padding: '5vh'
});

const tag = css({
  color: 'hotpink',
  fontSize: '3em',
  fontFamily: 'Staatliches'
});

const Ball = posed.img({
  draggable: 'y',
  dragBounds: { top: 0, bottom: 50 },
  dragEnd: { transition: spring }
});


const Dashboard = () => {
  console.log(moment().format())
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
        {week.map(day => (
          <div
            key={day}
            css={container_day}
          >
            <div
              css={day_name}
            >
              {day.substring(0, 3)}
            </div>
            <Day />
          </div>)
        )}
      </div>
      <div
        css={heatmap}
      >
        <CalendarHeatmap
          startDate={moment().startOf('year').subtract(2, 'days').format()}
          endDate={moment().format()}
          values={[
            { date: '2018-01-01', count: 1 },
            { date: '2018-01-22', count: 3  },
            { date: '2018-01-30', count: 5 },
            { date: '2018-04-30', count: 6 },
          ]}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return value.count < 2 
              ? 'color-scale-1'
              : value.count < 4 ? 'color-scale-2'
                : value.count < 6 ? 'color-scale-3' : 'color-scale-4';
          }}
        />
      </div> 
      <div
        css={container_tags}
      >
        <div
          css={tag}
        >
          #bouldering
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
