import { graphql } from 'react-relay';

export default graphql`
  query Tools_Query {
    tools {
      ...Toolset_tools
    }
  }
`;
