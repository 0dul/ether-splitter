import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Account address='address' />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
