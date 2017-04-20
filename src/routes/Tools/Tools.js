import React from 'react';
import Helmet from 'react-helmet';
import Toolset from './Toolset';
import styles from './Tools.scss';

/* eslint-disable react/prop-types */

export default function Tools() {
  return (
    <section>
      <Helmet>
        <title>Tools</title>
      </Helmet>
      <p className={styles.paragraph}>Tools response from GraphQL:</p>
      <Toolset />
    </section>
  );
}
