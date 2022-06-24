import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import TestFormContainer from './pages/TestFormContainer'
import MyForms from './pages/MyForms';
import './App.css'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [authState, setAuthState] = useState(localStorage.getItem('id_token'));
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={authState ? <MyForms /> : <Home setAuthState={setAuthState} />}
          />
          <Route
            path='/getform'
            element={<TestFormContainer />}
            // element={authState ? <TestFormContainer /> : <Home setAuthState={setAuthState} />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  )
};
