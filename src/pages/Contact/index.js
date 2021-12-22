import React, {Component} from 'react';
import InputField  from '../../components/Input';

class ContactPerson extends Component { // Inheritance
    constructor (props) {
        super(props);
        this.state = {
            firstName: '', // this value
            lastName: '',
            email :'',
            mobile: '',
            reason: ''
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
    // phases of life cycle
    // Mounting - Installing
    // Updating - 
    // UnMounting - Destroying

    // setState => to update the component state value
    onChangeHandler = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    onSubmit = () => {
        const {firstName, lastName, email, mobile, reason} = this.state;
        const payload = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            mobile,
            reason
        };
        alert(JSON.stringify(payload) + "Data submitted successfully");
    };

    onClear = () => {
        this.setState({
            firstName: '', // this value
            lastName: '',
            email :'',
            mobile: '',
            reason: ''
        })
    };

    render () {
        const {firstName, lastName, email, mobile, reason} = this.state;
        console.log("render triggered");
        console.log(this.state, "state values");
        return (
            <div>
                <p>FirstName: {firstName}</p>
                <p>
                    <InputField 
                        fieldName={'firstName'} 
                        fieldValue={firstName} 
                        onChange={(name, value) => this.onChangeHandler(name, value)} />
                    </p>
                <p>LastName: {lastName}</p>
                <p>
                    <InputField 
                        fieldName={'lastName'} 
                        fieldValue={lastName} 
                        onChange={(name, value) => this.onChangeHandler(name, value)} />
                </p>
                <p>Email: {email}</p>
                <p>
                    <InputField 
                        fieldName={'email'} 
                        fieldValue={email} 
                        onChange={(name, value) => this.onChangeHandler(name, value)} />
                </p>
                <p>Mobile: {mobile}</p>
                <p>
                    <InputField 
                        fieldName={'mobile'} 
                        fieldValue={mobile} 
                        onChange={(name, value) => this.onChangeHandler(name, value)} />
                </p>
                <p>
                    Reason: {reason}
                    <textarea 
                        onChange={(event) => this.onChangeHandler('reason', event.target.value)} 
                        value={reason} />
                </p>

                <button type='button' value="Clear" onClick={this.onClear} style={{margin: '10px'}} > Clear </button>
                <button type='submit' value="Save" onClick={this.onSubmit} style={{margin: '10px'}} > Save </button>
            </div>
        );
    }
};

export default ContactPerson;
