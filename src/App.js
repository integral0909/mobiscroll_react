import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar } from '@mobiscroll/react';

function App() {

    const view = React.useMemo(() => {
        return {
            timeline: {
                type: 'day'
            }
        };
    }, []);
    
    const myEvents = React.useMemo(() => {
        return [{
            start: '2022-10-02T00:00',
            end: '2022-10-05T00:00',
            title: 'Event 1',
            resource: 1
        }, {
            start: '2022-10-10T09:00',
            end: '2022-10-15T15:00',
            title: 'Event 2',
            resource: 3
        }, {
            start: '2022-10-12T00:00',
            end: '2022-10-14T00:00',
            title: 'Event 3',
            resource: 4
        }, {
            start: '2022-10-15T07:00',
            end: '2022-10-20T12:00',
            title: 'Event 4',
            resource: 5
        }, {
            start: '2022-10-03T00:00',
            end: '2022-10-10T00:00',
            title: 'Event 5',
            resource: 6
        }, {
            start: '2022-10-10T08:00',
            end: '2022-10-11T20:00',
            title: 'Event 6',
            resource: 7
        }, {
            start: '2022-10-22T00:00',
            end: '2022-10-28T00:00',
            title: 'Event 7',
            resource: 7
        }, {
            start: '2022-10-08T00:00',
            end: '2022-10-13T00:00',
            title: 'Event 8',
            resource: 15
        }, {
            start: '2022-10-25T00:00',
            end: '2022-10-27T00:00',
            title: 'Event 9',
            resource: 10
        }, {
            start: '2022-10-20T00:00',
            end: '2022-10-23T00:00',
            title: 'Event 10',
            resource: 12
        }]
    }, []);
    
    const myDrivers = React.useMemo(() => {
        return [{
            id: 1,
            name: 'Driver A',
            color: '#e20000'
        }, {
            id: 2,
            name: 'Driver B',
            color: '#76e083'
        }, {
            id: 3,
            name: 'Driver C',
            color: '#4981d6'
        }, {
            id: 4,
            name: 'Driver D',
            color: '#e25dd2'
        }, {
            id: 5,
            name: 'Driver E',
            color: '#1dab2f'
        }, {
            id: 6,
            name: 'Driver F',
            color: '#d6d145'
        }, {
            id: 7,
            name: 'Driver G',
            color: '#34c8e0'
        }, {
            id: 8,
            name: 'Driver H',
            color: '#9dde46'
        }]
    }, []);
    
    return (
        <Eventcalendar
            theme="windows" 
            themeVariant="light"
            dragToCreate = "true"
            dragToMove = "true"
            dragToResize = "true"
            view={view}
            data={myEvents}
            resources={myResources}
       />
    ); 
}

export default App;