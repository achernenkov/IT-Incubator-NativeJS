import React from 'react'
import './lesson_4';
import {createPromise, resolvePromiseHandler, rejectPromiseHandler} from './lesson_4'

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={ ()=> {createPromise()} }>Create Promise</button>
            <button id='btn-resolve-promise' onClick={ ()=> {resolvePromiseHandler('Click Resolve')} }>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={ ()=> {rejectPromiseHandler('Click Reject')} }>Reject Promise</button>
        </div>
    );
}

export default Lesson4;