import React,{ Component,Fragment } from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Alert from './components/layouts/Alert';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/notFound';

class App extends Component {
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res=await axios.get(`https://api.github.com/users?
  //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:res.data,loading:false});
  // }

  render()
  {
      return (
        <GithubState>
          <AlertState>
            <Router>
                <div className="App">
                <Navbar />
                <Alert />
                <Switch>
                <Route exact path='/' render={props=>(
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )} />
                <Route path='/about' component={About} />
                <Route path='/user/:login' component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Router>
          </AlertState>
        </GithubState>  
    );
  }
}

export default App;
