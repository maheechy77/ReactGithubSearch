import React,{ Component } from "react";
import "./App.css";
import axios from 'axios';

import Alert from './components/layouts/Alert';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state={
    users:[],
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

  searchName = async text =>{
    this.setState({loading:true});
    const res=await axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading:false});
  }

  clearData = () =>{ this.setState({ users:[], loading:false})};

  setAlert = (msg,type) =>{
    this.setState({alert:{msg,type}});
    setTimeout(()=>this.setState({alert:null}),3000)
  }

  render()
  {
      return (
      <div className="App">
        <Navbar />
        <h2>Hello React</h2>
        <Alert alert={this.state.alert}/>
        <Search clearData={this.clearData} 
          searchName={this.searchName} 
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
           />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
