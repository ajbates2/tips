import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('EHR', () => {
    it('renders without crashing', () => {
        const path = "/dashboard"
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Header
                    path={path}
                />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
})