import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from '../relay/environment';
import Home from '../routes/Home';

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query Home_Query {
        hello {
          ...Home_hello
        }
      }
    `}
    render={({ error, props }) => {
      console.log(props);
      if (error) {
        return null;
      } else if (props) {
        return <Home {...props} />;
      }
      return null;
    }}
  />
);
