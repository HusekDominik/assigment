import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./scss/main.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = "http://localhost:3000/graphql";

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
)
