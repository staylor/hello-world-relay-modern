import { graphql } from 'react-relay';

export default graphql`
  query Home_Query {
    hello {
      ...Home_hello
    }
  }
`;
