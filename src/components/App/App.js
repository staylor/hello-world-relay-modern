import React from 'react';
import Helmet from 'react-helmet';
import { Route, Link } from 'react-router-dom';
import Home from 'routes/Home';
import Tools from 'routes/Tools';
import styles from './App.scss';

const App = () => (
  <div>
    <Helmet
      defaultTitle="Universal React Starter Kyt"
      titleTemplate="%s - Universal React Starter Kyt"
    >
      <html lang="en" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link id="favicon" rel="shortcut icon" href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" />
    </Helmet>
    <i className={styles.logo} />
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/tools">Tools</Link>
      </li>
    </ul>
    <div className={styles.content}>
      <Route exact path="/" component={Home} />
      <Route path="/tools" component={Tools} />
    </div>
  </div>
);

export default App;
