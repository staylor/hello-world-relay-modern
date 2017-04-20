# Hello World, for Relay Modern

I made this repo because I was excited by the [f8 announcements](https://developers.facebook.com/FacebookforDevelopers/videos/10154614710193553/) and wanted to jump in and start hacking. Like many huge projects in the nodesphere, it takes longer to get started than it does to write the code. I want to help others get started.

## Getting Started

tl;dr to run this project locally:

```bash
# Runs a GraphQL server at http://localhost:8080/graphql
# You can view and explore the GraphQL schema/REPL from the browser
make graphql-dev

# Runs an Express server and a Webpack Dev Server
# Go to http://localhost:3000 in your browser - this is the frontend of your app
make dev
```

Those commands will install everything you need (if you're using a Mac).

If you mess around with the code and want to add more queries or fragment containers, you need to refresh the static query data via:
```bash
yarn run relay
# open a new tab and run a watcher
yarn run relay -- --watch
```

## Notes

Relay Modern is the next iteration of Relay from Facebook. Relay is a frontend framework for writing React apps that get their data from GraphQL. We are building the [next version of the New York Times](https://alpha.nytimes.com/) using Relay.

It can be a nightmare to learn all of the separate libraries that go into creating a Relay app. Before you can even start, you might have to spend hours learning Webpack, ES6, GraphQL, React, the list goes on forever.

This "Hello, World" app serves a few purposes:
1. It might become the basis for a Relay Starter [KYT](https://github.com/NYTimes/kyt)
1. Provides all of the boilerplate to start using Relay Modern
1. Ignores the now out-of-date isomorphic Relay libs and opts to start fresh with [React Router v4](https://reacttraining.com/react-router/) + [ES7 decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)

Things that are missing:

1. Code-splitting with React Router v4 - [the examples so far](https://reacttraining.com/react-router/web/guides/code-splitting) are bad
1. Isomorphic data fetching - i.e. rendering the result of Relay queries on the server. Universal apps load complete documents on the server. This is crucial for SEO.
1. Batch query fetching - this can be accomplished with middleware on both servers (App and GraphQL) via [React Relay Network Layer](https://github.com/nodkz/react-relay-network-layer), which like every other Relay tool, is now out of date.

## How stable is this?

Relay, even in its modern state, will evolve greatly in the short term. Libraries and frameworks will emerge just as we are settling into the new code. My advice is to take this time to familiarize yourself with [the new APIs](https://facebook.github.io/relay/docs/relay-modern.html) and try to build stuff them.
