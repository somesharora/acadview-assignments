import React ,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Home extends Component {
    state= {
        users: []
    }
componentDidMount()
{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(users=> {
    console.log(users)
        this.setState({
            users:users.data
        });
})
}
   render(){
    const {users}=this.state
    const usersList=users.length ?(
        users.map(user => {
            return(
                <div className="post card" key={user.id}>
                    <div className="card-content green lighten-4">
                        <Link to={'/'+user.id}>
                        <span className="card-title">{user.name}</span>
                        </Link>
                        <span className="card-title">{user.email}</span>
                        

                    </div>
                </div>
            )
        })
    ):(
        <div className="container">No User</div>
    );
 return(
     <div className="container">
         {usersList}
     </div>
 )
      }
}
export default Home

