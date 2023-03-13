import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Navigation.module.css';

const Navigation = (props) => {
  const context = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;