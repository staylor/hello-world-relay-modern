import fetch from 'fbjs/lib/fetch';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

async function fetchQuery(
  operation,
  variables
) {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  // eslint-disable-next-line no-console
  .catch(e => console.log(e));
  return response.json();
}

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
  network,
  store,
});

export default environment;
