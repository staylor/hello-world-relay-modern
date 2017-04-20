/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Tools_Query.graphql
 * @generated SignedSource<<0aae15aa62fc4120d63b314a5a5ef806>>
 * @relayHash b3fc17eea7870c0201fd28ae56553ead
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query Tools_Query {
  tools {
    toolset {
      ...Tool_tool
    }
  }
}

fragment Tool_tool on Tool {
  name
  summary
  url
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Tools_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Tools",
        "name": "tools",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Tool",
            "name": "toolset",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Tool_tool",
                "args": null
              }
            ],
            "storageKey": null
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
  "name": "Tools_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Tools_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Tools",
        "name": "tools",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Tool",
            "name": "toolset",
            "plural": true,
            "selections": [
              {
                "kind": "InlineFragment",
                "type": "Tool",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "summary",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Tools_Query {\n  tools {\n    toolset {\n      ...Tool_tool\n    }\n  }\n}\n\nfragment Tool_tool on Tool {\n  name\n  summary\n  url\n}\n"
};

module.exports = batch;