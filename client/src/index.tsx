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

let appoloClientUri;
if (window.location.origin.includes('localhost')) {
  appoloClientUri = 'http://localhost:4001';
} else {
  appoloClientUri = window.location.origin.replace('taskhub', 'graphql');
}

const httpLink = createHttpLink({
  uri: appoloClientUri
});

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
  link: authLink.concat(httpLink), //adds token befor each request
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
