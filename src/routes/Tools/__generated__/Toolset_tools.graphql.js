/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Toolset_tools.graphql
 * @generated SignedSource<<8d4e2c7ee41d9b9e00f1176546de942f>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Toolset_tools = {
  toolset?: ?Array<?Toolset_tools_toolset>;
};

export type Toolset_tools_toolset = {
  url?: ?string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Toolset_tools",
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
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "url",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Tool_tool",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Tools"
};

module.exports = fragment;
