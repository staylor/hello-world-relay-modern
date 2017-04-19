import express from 'express';
import graphQLHTTP from 'express-graphql';
import Schema from './schema';

const GRAPHQL_PORT = 8080;
const app = express();
const graphQLServer = graphQLHTTP(req => ({
  graphiql: true,
  schema: Schema,
  rootValue: {
    cookies: req.cookies,
  },
}));

app.use('/graphql', graphQLServer);

const server = app.listen(GRAPHQL_PORT, () => {
  const { address, port } = server.address();
  // eslint-disable-next-line no-console
  console.log(`GraphQL Server is now running on http://${address}:${port}`);
});
