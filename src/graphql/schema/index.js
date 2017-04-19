import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import HelloWorldType from './type/HelloWorld';

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
  },
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
