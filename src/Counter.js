import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // initial state 
        this.state = {
            count: 1
        };
    }

    onIncrementChangeHandler = () => {
        // count and incr by 1
        if (this.state.count < 10) {
            this.setState((prevState) => (
                { count: prevState.count + 1 }
            ));
        };
    };

    onDecrementChangeHandler = () => {
        if (this.state.count > 0) {
            this.setState((prevState) => (
                { count: prevState.count - 1 }
            ));
        }
    };

    render() {
        return (
            <div>
                <div> Count: {this.state.count}</div>
                <div>
                    <button type="button" 
                        styles={{margin:'10px', padding: '10px'}}
                        onClick={() => this.onIncrementChangeHandler()}
                        >
                            Increment
                    </button>
                    <button type="button"
                        onClick={this.onDecrementChangeHandler}>
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
};

export default Counter;