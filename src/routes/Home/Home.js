import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'react-relay';
import GraphQL from 'decorators/GraphQL';
import withFragment from 'decorators/withFragment';
import HomeQuery from 'queries/Home';
import styles from './Home.scss';

/* eslint-disable react/prefer-stateless-function */

@GraphQL(HomeQuery)
@withFragment(graphql`
  fragment Home_hello on HelloWorld {
    world
  }
`)
class HomeResponse extends Component {
  static propTypes = {
    hello: PropTypes.shape({
      world: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { hello } = this.props;
    return (
      <p className={styles.paragraph}>
        {hello.world}
      </p>
    );
  }
}

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p className={styles.paragraph}>
        Welcome to <strong>Relay Modern</strong>.
      </p>
      <HomeResponse />
    </section>
  );
}
