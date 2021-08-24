import { Component } from 'react';

import classes from './User.module.css';

// class User extends Component {

//   componentWillMount() {
//     console.log('User will mount!');
//   }
//   componentWillUnmount() {
//     console.log('User will unmount!');
//   }

//   render() {
//     return <li className={classes.user}>{this.props.name}</li>;
//   } 
// }

const User = (props) =>  <li className={classes.user}>{props.name}</li>;

export default User;
