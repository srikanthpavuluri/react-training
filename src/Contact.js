import React, {Component} from 'react';
import Counter from './Counter';

class ContactPerson extends Component { // Inheritance
    constructor (props) {
        super(props);
        this.state = {
            firstName: this.props.firstName, // this value
            lastName: '',
            email :'',
        };
    }
    // Mounting Phase
    componentWillMount() {
        console.log("componentWillMount"); //1
    }

    componentDidMount() {
        console.log("componentDidMount"); // 2
    }

    // Update Phase
    componentDidUpdate() {
        console.log("componentDidUpdate"); //4
    }

    shouldComponentUpdate() {
        // true or false
        return true;
    }

    // Unmount PHASE
    componentWillUnmount() {
        console.log("componentWillUnmount"); // last
    }

    // Mounting - Installing
    // Updating - 
    // UnMounting - Destroying

    // setState => to update the component state value

    render () {
        const {firstName, lastName, email} = this.state;

        return (
            <div>
               
                <p>FirstName: {firstName}</p>
                <p><input type="text" name="firstName" value={firstName} onChange={
                    (event) =>  {
                        console.log(event, 'event');
                        this.setState({
                            firstName: event.target.value
                        })
                    }}/></p>
                <p>LastName: {lastName}</p>
                <p>Email: {email}</p>
                <Counter />
            </div>
        );
    }
};

export default ContactPerson;


