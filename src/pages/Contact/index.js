import React, {Component} from 'react';
import Counter from '../../Counter';

class ContactPerson extends Component { // Inheritance
    constructor (props) {
        super(props);
        this.state = {
            firstName: '', // this value
            lastName: '',
            email :'',
            disableFirstName: false
        };
        // useState, useEffect
    }
    // Mounting Phase
    componentWillMount() {
        console.log("componentWillMount triggered"); //1

    }

    componentDidMount() {
        console.log("componentDidMount triggered"); // 2
        // API calls
    }

    // Update Phase
    componentDidUpdate() {
        console.log("componentDidUpdate triggered"); //4
        const {firstName, disableFirstName} = this.state;
        if (firstName.length > 6 && disableFirstName === false) {
            this.setState({
                disableFirstName: true
            });
        }
    }

    // Unmount PHASE
    componentWillUnmount() {
        console.log("componentWillUnmount triggered"); // last
    }

    // Mounting - Installing
    // Updating - 
    // UnMounting - Destroying

    // setState => to update the component state value

    render () {
        const {firstName, lastName, email, disableFirstName} = this.state;
        console.log("render triggered");
        console.log({firstName, lastName, email}, "state values");
        return (
            <div>
                <p>FirstName: {firstName}</p>
                <p><input type="text" disabled={disableFirstName} name="firstName" value={firstName} onChange={
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




