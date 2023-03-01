import styles from './Home.module.css';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <h2 className={styles.heading}>Glad to see you again!</h2>
    </div>
  );
};

export default Home;