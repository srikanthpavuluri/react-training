import { Component, useState } from 'react';

// import User from './User';
import classes from './Users.module.css';
/* 
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler = () => {
    // this.state.showUsers = false; // NOT!
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  render() {
    // iterator map funciton to loop array items
  
    const usersList = (
      <ul>
        {this.props.users.map((item, iteration) => {
          console.log(item, iteration+1);
          return item && <User key={item.id} name={item.name} />
        })}
      </ul>
    ); 

    console.log(usersList, 'usersList');

    return (
      <div className={classes.users}>
        <button onClick={() => this.toggleUsersHandler()}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>

        {this.state.showUsers && usersList}
      </div>
    );
  }
} 
*/


const User = (props) =>  <li className={classes.user}>{props.name}</li>;

const Users = (prop) => {

  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {prop.users.map((item) => (
        item && <User key={item.id} name={item.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button> 
      {showUsers && usersList}
    </div>
  );
};

export default Users;
