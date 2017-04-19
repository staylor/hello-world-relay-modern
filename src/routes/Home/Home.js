import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import styles from './Home.scss';

const Home = ({ hello }) => (
  <section>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <p className={styles.paragraph}>
      Welcome to the <strong>Relay Modern</strong>.
    </p>
    <p className={styles.paragraph}>
      {hello.world}
    </p>
  </section>
);

Home.propTypes = {
  hello: PropTypes.shape({
    world: PropTypes.string.isRequired,
  }).isRequired,
};

export default createFragmentContainer(Home, {
  fragments: {
    hello: graphql`
      fragment Home_hello on HelloWorld {
        world
      }
    `,
  },
});
