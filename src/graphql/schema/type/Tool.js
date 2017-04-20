import {
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';

const ToolType = new GraphQLObjectType({
  name: 'Tool',
  description: 'Information about a tool.',
  fields: {
    name: {
      description: 'Tool name.',
      type: GraphQLString,
    },
    summary: {
      description: 'Summary of the tool.',
      type: GraphQLString,
    },
    url: {
      description: 'Tool URL.',
      type: GraphQLString,
    },
  },
});

export default ToolType;
