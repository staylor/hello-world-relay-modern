import express from 'express';
import graphQLHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import Schema from './schema/';

const graphQLServer = graphQLHTTP(req => ({
  graphiql: true,
  schema: Schema,
  rootValue: {
    cookies: req.cookies,
  },
}));

const app = express();
app.use(bodyParser.json());
app.use('/graphql', graphQLServer);

const GRAPHQL_PORT = 8080;
const server = app.listen(GRAPHQL_PORT, () => {
  const { address, port } = server.address();
  // eslint-disable-next-line no-console
  console.log(`GraphQL Server is now running on http://${address}:${port}`);
});
