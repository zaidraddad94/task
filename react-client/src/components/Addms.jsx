import React from 'react';
import $ from 'jquery';
class Addms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ms: ""

    },
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    
    console.log("eeeee" , e.target.id)

    if (e.target.id == 1){
this.setState({
      name: e.target.value 
    });

    }else if (e.target.id == 2){
      this.setState({
      ms: e.target.value
    });
    }

    console.log(this.state)
  }

search () {
    var that = this 
    console.log("xxxxxxx",this.state.name );
   $.ajax({
    type: "POST",
    url: '/items',
    data: {name:this.state.name,
            ms:this.state.ms
          },
    success: function (xxx){
      console.log(xxx)
      // that.setstate.repos= xxx
        // that.setState({
        //   repos:xxx
        // })
      console.log( "after", that.state.repos)
      } 
   });

  console.log();
  }




  render() {
    return (<div  >
      <h4>zzzzzzzz</h4>
      Enter a github username: <input id="1" onChange={this.onChange}/>  
      Enter a github massege: <input id="2" onChange={this.onChange}/>   
      <form>
      <button onClick={this.search}> send </button>
      </form>
      <form>
      <button > refresh </button>
      </form>

    </div>) 
  }
}

export default Addms;