import React from 'react';
import DayPart from './DayPart';

const Day = () => {

    const testProps = {
        timeOfDay:'Morning',
        icon: '☀️',
        tempC: 0,
        tempF: 1,
        precip: 24

    }

    return (
        <table>
            <tr>
              <th>
                <text>Today</text>
              </th>
              </tr>
            <tr>
                <DayPart {...testProps}/>
                <DayPart {...testProps}/>
                <DayPart {...testProps}/>
                <DayPart {...testProps}/>
                

            </tr>
          </table>
    );

}

export default Day;