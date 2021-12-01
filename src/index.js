import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/api/v2',
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
    query MyQuery {
        Media(id: 17) {
          title {
            english
            romaji
          }
          coverImage {
            large
          }
          genres
          description
        }
      }`
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
