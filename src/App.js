import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css'



//Qestion 1
class CardContact extends React.Component{
  render(){
    return< div className="root">
          <p>{this.props.name}</p> 
          <p>{this.props.num}</p> 
          <p>{this.props.email}</p> </ div>
  }

  
}
function App(){
  return (
  <div className= "Cards">
   <div class= "cards"> <CardContact name='Bina' num="444-444-4444" email="example1@something.com" /></div>
   <div class= "cards"> <CardContact name='Ina' num="333-333-3333" email="example2@something.com" /></div>
   <div class= "cards"> <CardContact name='Lona' num="555-555-555" email="example3@something.com" /></div>
</div>);

}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;