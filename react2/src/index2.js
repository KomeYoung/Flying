import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
function Heee(){
    return <div>
        <input id="age" value="18" />
        <br/>
        <button type = "button" onClick="myFunction2()">试一试</button>
        <br/>
        <p id="show"/>
    </div>
}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

function Hello(props){
    return <div>Hello,{props.toWhat}</div>

}
// const ss = function ()
function HelloWorld(){
    return <Hello toWhat = "fkjfk"/>
}
function myFunction2() {
    var age, voteable;
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "输入值不是数字";
    } else {
        voteable = (age < 18) ? "好年轻" : "够成熟";
    }
    document.getElementById("show").innerHTML = voteable;
}

function myFunction() {
    let description;
    const number = Number(document.getElementById("num").value);
    if (number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }

    document.getElementById("show").innerHTML = number+" is an "+description+"number";
    // return <div>{number} is an {description} number</div>;
}

function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
}
const elem = <NumberDescriber number = "2"/>
ReactDOM.render(
    // HelloWorld(),
    // <NumberDescriber number = "2"/>,
    <Heee/>,
    // <Comment
    //     date={comment.date}
    //     text={comment.text}
    //     author={comment.author}
    // />,
    document.getElementById('root')
);
//
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
