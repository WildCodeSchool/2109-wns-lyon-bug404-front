import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'flowbite';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

let appoloClientUri;
if (window.location.origin.includes('localhost')) {
  appoloClientUri = 'http://localhost:4000';
} else {
  appoloClientUri = window.location.origin.replace('taskhub', 'graphql');
}
const client = new ApolloClient({
  uri: appoloClientUri,
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
