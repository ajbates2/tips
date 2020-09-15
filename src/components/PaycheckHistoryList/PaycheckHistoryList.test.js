import React from 'react';
import ReactDOM from 'react-dom';
import PaycheckHistoryList from './PaycheckHistoryList';

describe('PaycheckHistoryList', () => {
    it('renders without crashing', () => {
        const paychecks = [{
            id: 1,
            check_total: "100",
            job: {
                id: 1,
                job_name: "Applebees"
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
            <PaycheckHistoryList
                paychecks={paychecks}
                userData={userData}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})