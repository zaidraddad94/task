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



  // addms (term) {
  //   var that = this 
  //   console.log(`${term} was searched`);
  //  $.ajax({
  //   type: "POST",
  //   url: '/items',
  //   data: {data:term},
  //   success: function (xxx){
  //     console.log(that.state.repos)
  //     // that.setstate.repos= xxx
  //       that.setState({
  //         items:xxx
  //       })
  //     console.log( "after", that.state.repos)
  //     } 
  //  });

  // console.log(`${term} was searched`);
  // }

  render () {
    return (<div>
      
         

    
      <List  bsStyle="primary"
      items={this.state.items}/>
      
    

     
     
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));