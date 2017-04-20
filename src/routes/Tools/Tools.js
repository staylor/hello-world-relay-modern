import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GraphQL from 'decorators/GraphQL';
import ToolsQuery from 'queries/Tools';
import Tool from './Tool';
import styles from './Tools.scss';

/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */

@GraphQL(ToolsQuery)
class Toolset extends Component {
  render() {
    const { tools: { toolset } } = this.props;

    return (
      <ul>
        {toolset.map(tool => <Tool key={tool.__id} tool={tool} />)}
      </ul>
    );
  }
}

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
