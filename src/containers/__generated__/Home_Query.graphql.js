/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Home_Query.graphql
 * @generated SignedSource<<4c197ce048a63a2c422c92ea22ef4894>>
 * @relayHash 8940798d83295d6866210e343cd1159a
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query Home_Query {
  hello {
    ...Home_hello
  }
}

fragment Home_hello on HelloWorld {
  world
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Home_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "HelloWorld",
        "name": "hello",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Home_hello",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Home_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Home_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "HelloWorld",
        "name": "hello",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "world",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Home_Query {\n  hello {\n    ...Home_hello\n  }\n}\n\nfragment Home_hello on HelloWorld {\n  world\n}\n"
};

module.exports = batch;
