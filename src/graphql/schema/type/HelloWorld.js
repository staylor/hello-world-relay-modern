import {
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

const HelloWorldType = new GraphQLObjectType({
  name: 'HelloWorld',
  description: 'Hello World object',
  fields: {
    world: {
      description: 'A message.',
      type: GraphQLString,
    },
  },
});

export default HelloWorldType;
