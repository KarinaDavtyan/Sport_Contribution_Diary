import React, { useReducer } from 'react';
import { css } from '@emotion/core';
import posed from 'react-pose';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import moment from 'moment';
import { DragDropContextProvider, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Day from '../components/Day';
import Tag from '../components/Tag';

const week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const container = css({
  display: 'flex',
  padding: 0,
  height: '100vh',
  width: '100vw',
  flexDirection: 'column',
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
});

const day_name = css({
  color: 'white',
  fontFamily: 'Staatliches',
  fontSize: '1.5em'
});

const container_tags = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  height: '25vh',
});

const container_heatmap = css({
  width: '90vw',
  padding: '5vh'
});

const DayName = posed.div({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  }
});


const Dashboard = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      activity: [
        { date: '2019-01-01', count: 1 },
        { date: '2019-01-22', count: 3 },
        { date: '2019-01-30', count: 5 },
        { date: '2019-04-30', count: 6 },
      ],
      tags: [
        'bouldering', 'yoga', 'sport_climbing_🧗‍♀️', 'gym💪'
      ],
      events: [[], [], [], [], [], [], []]
    }
  );

  function handleDrop (index, item) {
    const newEvents = state.events.slice();
    newEvents[index] = [ ...newEvents[index], item.id];
    setState({
      ...state,
      events: newEvents
    });
  }

  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div
        css={container}
      >
        <div
          css={container_week}
        >
          {week.map((day, index )=> {
            const events = state.events.length > 0 
              ? state.events[index] : null;
            return (
              <DayName
                key={day}
                css={container_day}
              >
                <div
                  css={day_name}
                >
                  {day.substring(0, 3)}
                </div>
                <Day
                  onDrop={item => handleDrop(index, item)}
                  events={events}
                />
              </DayName>
            );
          }
          )}
        </div>
        <div
          css={container_heatmap}
        >
          <CalendarHeatmap
            startDate={moment().startOf('year')}
            endDate={moment().endOf('year')}
            values={state.activity}
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
          {
            state.tags.map(tag => (
              <Tag
                key={tag}
                tag={`#${tag}`}
              />
            ))
          }
        </div>
      </div>
    </DragDropContextProvider>
  );
};

export default DragDropContext(HTML5Backend)(Dashboard);
