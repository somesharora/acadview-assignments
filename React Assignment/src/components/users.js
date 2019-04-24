import React ,{Component} from 'react'
import axios from 'axios'
class users extends Component {
    
    state= {
        users:null
    }
    
componentDidMount()
{     let id=this.props.match.params.id;
axios.get('https://jsonplaceholder.typicode.com/users/' +id)
    .then(user=> {
        this.setState({
            users:user.data
        });
        console.log(user);
})
}
   render(){
    const user=this.state.users ? (
            <div className="post" >
                        <h4 className="center">{this.state.users.name}</h4>
                        <span className="card-title">{this.state.users.email}</span>
                        <p>
                        {this.state.users.address.street}
                        </p>
                </div>
    ):(
    <div className="container">Loading</div>
            )
 return(
     <div className="container">
         {user}
     </div>
 )
      }
}
export default users

