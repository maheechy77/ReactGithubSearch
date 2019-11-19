import React,{ Component,Fragment } from "react";
import "./App.css";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import Alert from './components/layouts/Alert';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state={
    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null
  }
  
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res=await axios.get(`https://api.github.com/users?
  //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:res.data,loading:false});
  // }

  setAlert = (msg,type) =>{
    this.setState({alert:{msg,type}});
    setTimeout(()=>this.setState({alert:null}),3000)
  }

  render()
  {
      return (
        <GithubState>
            <Router>
                <div className="App">
                <Navbar />
                <Alert alert={this.state.alert}/>
                <Switch>
                <Route exact path='/' render={props=>(
                  <Fragment>
                    <Search 
                      setAlert={this.setAlert}
                      />
                    <Users />
                  </Fragment>
                )} />
                <Route path='/about' component={About} />
                <Route path='/user/:login' component={User} />
              </Switch>
            </div>
          </Router>
        </GithubState>  
    );
  }
}

export default App;
