import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-relay';
import withFragment from '../../../decorators/withFragment';
import styles from './Tool.scss';

/* eslint-disable react/prefer-stateless-function */

@withFragment(graphql`
  fragment Tool_tool on Tool {
    name
    summary
    url
  }
`)
export default class Tool extends Component {
  static propTypes = {
    tool: PropTypes.shape({
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {
      tool: {
        name,
        summary,
        url,
      },
    } = this.props;

    return (
      <li className={styles.tool}>
        <a href={url}>{name}</a> - {summary}
      </li>
    );
  }
}
