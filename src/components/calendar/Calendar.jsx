import React, {Component} from 'react';

import './Calendar.css';

import BigCalendar from 'react-big-calendar';
import moment from 'moment'

class Calendar extends Component {

  constructor() {
    super();

    BigCalendar.momentLocalizer(moment);

    this.state = {
      view: 'month',
      event: null
    }

    this.eventSelectedHandler = this.eventSelectedHandler.bind(this);
  }

  eventSelectedHandler(event, syntheticEvent) {

  }

  render() {
    const month = moment().format("MM");
    const year = moment().format("YYYY");
    const views = ['month'];

    const events=[
      {
        id: 1,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
      },
      {
        id: 2,
        title: 'Blah',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Everybody\'s got a secret',
      },
    ]


    return (
      <div div="calendar">

        <BigCalendar
          events={events}
          onSelecrEvent={this.eventSelectedHandler}
          defaultView="month"
          views={views}
          toolbart="false"
        ></BigCalendar>


      </div>
    );
  }
}

export default Calendar;
