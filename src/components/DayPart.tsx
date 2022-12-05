import React from 'react';


interface WeatherData {
    timeOfDay: string;
    icon: string;
    tempC: number;
    tempF: number;
    precip: number;


}

const DayPart = (props:WeatherData) => {

    return (
        <td>
            <text>{props.timeOfDay}</text>
            <br/>
            <text>{props.icon}</text>
            <br/>
            <text>{props.tempC}</text>
            <br/>
            <text>{props.precip}</text>
        </td>
    );
}
export default DayPart;