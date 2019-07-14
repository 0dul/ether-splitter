import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Avatar name='name' />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
