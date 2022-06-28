import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'flowbite';
import App from './App';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

let appoloClientUri;
if (window.location.origin.includes('localhost')) {
  appoloClientUri = 'http://localhost:4001';
  // connect the GraphQL API
  const link = createUploadLink({ uri: appoloClientUri });
} else {
  appoloClientUri = window.location.origin.replace('taskhub', 'graphql');
}

const httpLink = createHttpLink({
  uri: appoloClientUri
});

// connect the GraphQL API
const link = createUploadLink({ uri: 'http://localhost:4001/graphql' });

// fetch token from localstorage and set it in headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
const client = new ApolloClient({
  // uri: appoloClientUri,
  // cache: new InMemoryCache()
  // link: authLink.concat(httpLink), //adds token befor each request
  link: authLink.concat(link),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
