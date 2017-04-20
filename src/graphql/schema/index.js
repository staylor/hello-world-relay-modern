import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import HelloWorldType from './type/HelloWorld';
import ToolsType from './type/Tools';
import toolData from '../data/tools.json';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Hello World queries',
  fields: {
    hello: {
      description: 'Hello World.',
      type: HelloWorldType,
      resolve: () => ({
        world: 'This is a GraphQL response.',
      }),
    },
    tools: {
      description: 'Tools.',
      type: ToolsType,
      resolve: () => ({
        toolset: toolData,
      }),
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
