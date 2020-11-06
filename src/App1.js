// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Apollo Client libraries
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// // global styles
// import GlobalStyle from '/components/GlobalStyle';
// // import our routes
// import Pages from '/pages';


// // check for a local token
// const data = {
//     isLoggedIn: !!localStorage.getItem('token')
//    };
//    // write the cache data on initial load
//    cache.writeData({ data });
//    // write the cache data after cache is reset
//    client.onResetStore(() => cache.writeData({ data }));

   
// // configure our API URI & cache
// const uri = process.env.API_URI;
// const cache = new InMemoryCache();
// // configure Apollo Client
// const client = new ApolloClient({
//  uri,
//  cache,
//  connectToDevTools: true
// });
// const App = () => (
//  <ApolloProvider client={client}>
//  <GlobalStyle />
//  <Pages />
//  </ApolloProvider>
// );
// ReactDOM.render(<App />, document.getElementById('root'));