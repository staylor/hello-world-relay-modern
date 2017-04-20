import React, { Component } from 'react';
import { graphql } from 'react-relay';
import GraphQL from 'decorators/GraphQL';
import withFragment from 'decorators/withFragment';
import ToolsQuery from 'queries/Tools';
import Tool from './Tool';

/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

@GraphQL(ToolsQuery)
@withFragment(graphql`
  fragment Toolset_tools on Tools {
    toolset {
      url
      ...Tool_tool
    }
  }
`)
export default class Toolset extends Component {
  render() {
    const { tools: { toolset } } = this.props;

    return (
      <ul>
        {toolset.map(tool => <Tool key={tool.url} tool={tool} />)}
      </ul>
    );
  }
}
