import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import studentReducer from './reducers/studentReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,name:'John Doe',grade:1,school:'React Redux School'},{id:2,name:'Jane Doe',grade:2,school:'React Redux School'}
,{id:3,name:'Terry Adams',grade:3,school:'React Redux School'},{id:4,name:'Jenny Smith',grade:4,school:'React Redux School'}];

if( localStorage.getItem("students") === null)
localStorage.setItem('students',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('students'));

const store = createStore(studentReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
