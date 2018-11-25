import React from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
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
//this function to take value from the text bar and save it in side props so serch function can use the data in it to send poset requst to the data using ajax and it will be saved in data base 
  onChange (e) {
    
    console.log("eeeee" , e.target.id)
// this if satment used  becose the is tow text pox and one function so each time this function calld we need to check wish text box calld hem using id \  
    if (e.target.id == "dd"){
this.setState({
      name: e.target.value 
    });

    }else if (e.target.id == "d"){
      this.setState({
      ms: e.target.value
    });
    }

    console.log(this.state)
  }
//this is the post function when we pris the poton he will take the data in prps and send it to the data pase 
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
      console.log( "after", that.state.repos)
      } 
   });

  console.log();
  }




  render() {
    return (<div>
      

           <h4 id="aaa" >name : </h4><input  id="dd" onChange={this.onChange}/>  
       <h3 id="aaa" >massege : </h3><input id="d" onChange={this.onChange}/>   
      <form>
      <button id="zzz" onClick={this.search}>  send  </button></form><form><button id="button" > refresh </button>
     
      </form>

    </div>
      
    ) 
  }
}

export default Addms;


ReactDOM.render(<Addms />, document.getElementById('Addms'));