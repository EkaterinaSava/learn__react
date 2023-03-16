import { useContext } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

import styles from './Home.module.css';

const Home = () => {
  const context = useContext(AuthContext);

  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>Glad to see you again!</h2>
      <Button onClick={context.onLogout}>Log out</Button>
    </div>
  );
};

export default Home;