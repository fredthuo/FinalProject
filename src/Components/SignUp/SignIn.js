// import React, {Component} from 'React';

// class SignIn extends Component{
//         state ={
//             email:'',
//             password:'',
//             role:''
//         }
//     changeHandler = (event)=>{
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState(
//             {
//                 [name]:value
//             }
//         )
//     }
//     submitHandler = (event) =>{
//         event.preventDefault();
//         const user ={
//             email:this.state.email,
//             password:this.state.password,
//             role:this.state.role
//         }
//         axios.post('http://localhost:8080/signIn',user)
//         .then(response=>{
//             console.log("User logged In")

//         }).catch(error=>{
//             console.log("Error")
//         })
//     }
//     render(){
//         let Links = null;
//         let signInField = null;
//         if(this.props.user){

//         }
//         return(
//             <div>
//             </div>
//         )
//     }
// }