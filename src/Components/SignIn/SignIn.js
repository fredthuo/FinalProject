import React, {Component} from 'react';
class SignIn extends Component {
    state ={
        email: '',
        password: ''
    }
    signInChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }
    signInSubmitHandler = (event)=>{
        event.preventDefault();
        const user ={
            email:this.state.email,
            password:this.state.password
        }
    }
    render() {
        return (
            <form className="text-center">
                 <form className="form-signin">
                    <h1 className="sr-only">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input value={this.state.email} name="email"  type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input name="password"   type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button onSubmit={this.signInSubmitHandler} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>

            </form>
        );
    }
}

export default SignIn;