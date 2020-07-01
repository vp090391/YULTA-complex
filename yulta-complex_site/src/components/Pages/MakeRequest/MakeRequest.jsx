import React from 'react';
import s from './MakeRequest.module.scss'

const MakeRequest = (props) => {
    let state = props.makeRequestPage;

    return (
        <div>
            {state.message}
        </div>
    )
};

export default MakeRequest;