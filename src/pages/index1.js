// // import React and routing dependencies
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// // import shared layout component
// import Layout from '../components/Layout';
// // import routes
// import Home from './home';
// import MyNotes from './mynotes';
// import Favorites from './favorites';
// import NotePage from './note';
// import SignUp from './signup1';
// import SignIn from './signin1';
// import EditNote from './edit';
// import { useQuery, gql } from '@apollo/client';

// const IS_LOGGED_IN = gql`
//  {
//  isLoggedIn @client
//  }
// `;
// // define routes
// const Pages = () => {
//     return (
//         <Router>
//         <Layout>
//         <Route exact path="/" component={Home} />
//         <PrivateRoute path="/mynotes" component={MyNotes} />
//         <PrivateRoute path="/favorites" component={Favorites} />
//         <Route path="/note/:id" component={Note} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/signin" component={SignIn} />
//         </Layout>
//         </Router>
//         );
//        };

// // add a new private route that accepts an :id parameter
// <PrivateRoute path="/edit/:id" component={EditNote} />


// // update our react-router import to include Redirect
// // add the PrivateRoute component below our `Pages` component
// const PrivateRoute = ({ component: Component, ...rest }) => {
//  const { loading, error, data } = useQuery(IS_LOGGED_IN);
//  // if the data is loading, display a loading message
//  if (loading) return <p>Loading...</p>;
//  // if there is an error fetching the data, display an error message
//  if (error) return <p>Error!</p>;
//  // if the user is logged in, route them to the requested component
//  // else redirect them to the sign-in page
//  return (
//  <Route
//  {...rest}
//  render={props =>
//  data.isLoggedIn === true ? (
//  <Component {...props} />
//  ) : (
//  <Redirect
//  to={{
//  pathname: '/signin',
//  state: { from: props.location }
//  }}
//  />
//  )
//  }
//  />
//  );
// };
// export default Pages;
