import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import List from './components/List.jsx';
import Addms from './components/Addms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render () {
    return (<div>
      
         

    
      <List  bsStyle="primary"
      items={this.state.items}/>
      
    

     
     
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));