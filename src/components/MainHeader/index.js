import { NavLink } from 'react-router-dom';

import classes from './index.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/'>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/products'>
              Products Page
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/Users'>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/Counter'>
              Counter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;