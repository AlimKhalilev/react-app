import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogPersons = [
    {id: 1, name: "Alim"},
    {id: 2, name: "Sasha"},
    {id: 3, name: "Khaibulla"},
    {id: 4, name: "Edem"}
];

let dialogMessages = [
    {id: 1, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!"},
    {id: 2, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!"},
    {id: 3, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!"},
    {id: 4, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!"}
];

let postData = [
    {id: 0, message: "Здарова всем пацаны, как дела??", likes: 12},
    {id: 1, message: "Это конечно не Самара, и не Пермь..", likes: 2},
    {id: 2, message: "Але че куда", likes: 1}
];

ReactDOM.render(
    <React.StrictMode>
        <App postData={postData} dialogMessages={dialogMessages} dialogPersons={dialogPersons}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
