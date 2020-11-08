import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()}
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

class App2 extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <button onClick={this.state.handleClick2}>
                {/*{this.state.}*/}
            </button>
        );
    }



    handleClick2() {
       this.setState()
    }


}
export default App;
