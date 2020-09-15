import React from 'react';
import ReactDOM from 'react-dom';
import ShiftHistoryList from './ShiftHistoryList';

describe('ShiftHistoryList', () => {
    it('renders without crashing', () => {
        const shifts = [{
            id: 1,
            tips: "126.00",
            hours: "5.82",
            role: {
                employer: "Applebees",
                title: "Server"
            }
        }]
        const userData = {
            user_name: "demo",
            jobs: [{
                id: 1,
                job_name: "Applebees"
            }],
            roles: [{
                role_name: "Server",
                id: 1,
                job_id: 1,

            }]
        }
        const div = document.createElement('div');
        ReactDOM.render(
            <ShiftHistoryList
                shifts={shifts}
                userData={userData}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})