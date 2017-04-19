import 'isomorphic-fetch';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables
) {
  const encodedVars = JSON.stringify(variables);

  return fetch(`/graphql?query=${operation.text}&variables=${encodedVars}`, {
    method: 'POST',
  }).then(response => response.json());
}

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
  network,
  store,
});

export default environment;
