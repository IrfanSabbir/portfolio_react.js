import React from 'react';
import './App.css';
import MainPage from './container/MainPage.jsx'
import Table from './container/Table'
import {ApolloProvider , ApolloClient , InMemoryCache} from '@apollo/client'

import {Route, Switch} from 'react-router-dom'
import MessengerCustomerChat from 'react-messenger-customer-chat';

 
function App() {
  const client = new ApolloClient({
    uri:process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache()
  })
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/irfan" component={Table}/>
          <Route path="/" exact component={MainPage}/>
        </Switch>
         {/* <MainPage/> */}
         
      <MessengerCustomerChat
      pageId="103328228337530"
      appId="847045846052167"
      htmlRef="<REF_STRING>"
    /> 
      </ApolloProvider>
    </div>
  );
}



export default App;
