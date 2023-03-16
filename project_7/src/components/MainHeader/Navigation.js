import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Navigation.module.css';

const Navigation = () => {
  const context = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;