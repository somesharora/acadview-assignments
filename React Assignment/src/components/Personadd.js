import React, { Component } from 'react'

class Personadd extends Component {
    state={
        name:'',
        roll:''
    }
    handleChange=(e)=>{
        console.log(e);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            users:''
        })

    }
  render() {
    return (
      <div className="container">
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Your Full Name" onChange={this.handleChange} />
          <label htmlFor="roll">RollNumber</label>
          <input type="text" id="roll" placeholder="Enter Your RollNumber" onChange={this.handleChange}/>
          <button> Add</button>
          </form>
      </div>
    )
  }
}
export default Personadd
