import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

// const let in replace var

const DUMMY_USERS = [
  { id: 'u1', name: 'Rohit' }, // item
  { id: 'u2', name: 'Sachin' },
  { id: 'u3', name: 'Amit' },
  { id: 'u4', name: 'Anil' },
  { id: 'u5', name: 'Ram' },
  undefined
];
/*
class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />

      </Fragment>
    );
  }
}
*/

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // filter similar to map => 
    const result = DUMMY_USERS.filter((item) =>  item && item.name.includes(searchTerm));
    console.log(result, 'result');
    setFilteredUsers(result);
  }, [searchTerm]); //on every of the search team changes.

  useEffect(() => {
    // filter similar to map => 
    // ComponentDidMount
    console.log("componentDid mount");
  }, []);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
