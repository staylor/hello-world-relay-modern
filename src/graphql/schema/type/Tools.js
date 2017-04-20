import {
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import Tool from './Tool';

const ToolsType = new GraphQLObjectType({
  name: 'Tools',
  description: 'Tools used to build this example.',
  fields: {
    toolset: {
      description: 'A list of tools.',
      type: new GraphQLList(Tool),
    },
  },
});

export default ToolsType;
