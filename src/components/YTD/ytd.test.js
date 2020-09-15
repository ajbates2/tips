import React from 'react';
import ReactDOM from 'react-dom';
import YTD from './ytd';

describe('YTD', () => {
    it('renders without crashing', () => {
        const shifts = [{
            tips: "126.00",
            hours: "5.82",
        }]
        const paychecks = [{
            check_total: "100"
        }]
        const div = document.createElement('div');
        ReactDOM.render(
            <YTD
                shifts={shifts}
                paychecks={paychecks}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})