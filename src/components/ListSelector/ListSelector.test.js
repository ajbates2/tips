import React from 'react';
import ReactDOM from 'react-dom';
import ListSelector from './ListSelector';

describe('ListSelector', () => {
    it('renders without crashing', () => {
        const activeState = 'tips'
        const updateList = () => { }
        const div = document.createElement('div');
        ReactDOM.render(
            <ListSelector
                activeState={activeState}
                updateList={updateList}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})