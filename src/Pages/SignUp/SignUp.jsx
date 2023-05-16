import React, { useContext } from 'react';
import img from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password)

         createUser(email, password)
         .then(result =>{
            const user = result.user;
            console.log(user)
         })
         .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
     
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl font-bold">SignUp!</h1>
        <form onSubmit={handleSignIn} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">confirm password</span>
          </label>
          <input type="text" name='password' placeholder="confirm password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className='btn btn-primary' type="submit" value="signUp" />
        </div>
        </form>
        <p className='text-orange-500'>all ready have an account? <Link to="/login">login</Link> </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;