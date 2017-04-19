import React from 'react';
import Helmet from 'react-helmet';
import styles from './Home.scss';

const Home = () => (
  <section>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <p className={styles.paragraph}>
      Welcome to the <strong>Universal React Starter-kyt</strong>.
      This starter kyt should serve as the base for an advanced,
      server-rendered React app.
    </p>
    <p className={styles.paragraph}>
      Check out the Tools section for an outline of the libraries that
      are used in this Starter-kyt.
    </p>
  </section>
);

export default Home;
