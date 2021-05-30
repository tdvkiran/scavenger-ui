import React, { useEffect,Suspense } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout'
import User from './containers/Users/User';

const Auth=React.lazy(()=>{
  return import('./containers/Auth/Auth');
})
const Logout=React.lazy(()=>{
  return import('./containers/Auth/Logout/Logout');
})
const Branches=React.lazy(()=>{
  return import('./containers/Branches/Branches');
})

const App = (props)=> {
    let routes = (
      <Switch>
        <Route path='/auth' render={(props)=><Auth {...props}/>} />
        <Route path="/branches" render={props =><Branches {...props} />} />
        <Route path="/" exact component={User} />
        <Redirect to='/'/>
      </Switch>
    )

    if (props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/branches" render={<Branches />} />
          <Route path='/logout' render={(props)=><Logout {...props}/>} />
          <Route path='/auth' render={(props)=><Auth {...props}/>} />
          <Route path="/" exact component={User}/>
          <Redirect to='/'/>
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}> {routes}</Suspense>
        </Layout>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps,null)(App);

