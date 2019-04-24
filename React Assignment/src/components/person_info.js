import React, { Component } from 'react'
import Personadd from './Personadd'
import Screen from'./screenadd'
class Person extends Component {
  state={
    infos:[{id:1, name:'Pushkar', roll:'1610991656'}]
}
add = (info) => { 
  info.id=Math.random();
  let infos=[...this.state.infos,info];
  this.setState({
    infos:infos
  })

}
  render() {
    return (
     <div className="container">
       
       <Personadd add={this.add}/>
       <Screen info={this.state.infos}/>
     </div>
    )
  }
}


export default Person

