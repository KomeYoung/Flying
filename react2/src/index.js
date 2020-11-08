import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './index3.js';
import reportWebVitals from './reportWebVitals';
import ComponentA from "./index4";
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <ol start={'11'} >
                    <li>咖啡</li>
                    <li>茶</li>
                    <li>牛奶</li>
                </ol>
                <a href={'https://blog.csdn.net/weixin_36302575/article/details/86543649'}>1567252675/t</a>
                <a href={'https://blog.csdn.net/weixin_36302575/article/details/86543649'}>1567252675</a>
                {/*<h1>Hello, world!</h1>*/}
                {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
            </div>
        );
    }
}

const ss = {
    dd :function aa(){

        return React.createElement(JamesShow,{date:new Date()},1111);
        // return <div>
        //     172872829
        // </div>
}
};

class JamesShow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
          <div>
          <button  onClick={this.handleClick}>{this.state.date.toLocaleTimeString()}--fjkfhfjkf</button>
          </div>
        );
    };

    handleClick(){
        this.setState(state => ({
            date:new Date()
        }));
        // this.setState(function (state) {
        //     return {date:new Date()};
        // });
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }
    //class fields语法
    handleClick =()=> {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class Count extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn:false}
    }
    render() {
        return <div onClick={this.handleClick}>点我试试{this.state.isToggleOn+''}</div>
        // return TodoList;
    }

    handleClick =()=> {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }),() => console.log('111--'+this.state.isToggleOn));
        console.log(this.state.isToggleOn);
    }
//     handleClick(){
// this.setState(function (state){
//     return {count:state.count+1}
// });
//     }
}

function Item(props) {
    return <li>{props.key}</li>;
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    const todos2 = [1,2,3];
    return (
        <div>
            {todos2.map((content) => <Item key={content} message = {content} />)}
        </div>
    );
}
ReactDOM.render(
    <Count />,
    document.getElementById('root')
);