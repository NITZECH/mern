import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
          
    <section className="sign-in">
        <div className="container mt-5 mx-auto">
            <div className="signin-content">
            <div className="signin-image">
                    <figure><lottie-player  src="https://assets10.lottiefiles.com/packages/lf20_BhWJsn.json"  background="transparent" 
                     speed="0.6"   loop autoplay ></lottie-player>

</figure> <h1
                        className="signin-image-link" >New here?</h1>
                       <NavLink class="btn btn-lg btn-outline-primary" to="/signup" role="button">Sign Up</NavLink>
                       </div>   
                <div className="signin-form">
                    <h2 className="form-title mx-auto" >Sign In </h2>
                    <form method="POST" className="register-form" id="register-form">
                      
                        <div className="form-group">
                            <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name" />
                            </label><input type="email" name="email" id="email" autoComplete="off"
                                placeholder="Your Email"  /></div>
                      
                       
                        <div className="form-group"><label htmlFor="password"><i
                                    className="zmdi zmdi-lock material-icons-name" />
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off"
                                placeholder="Your Password"  />
                        </div>
                 
                        <div className="form-group form-button">
   <input type="submit" name="signin" id="signin"
                                className="form-submit"
value="Log In" /></div>
                    </form>
                </div>
             
            </div>
        </div>
    </section>
            
        </>
    )
}

export default Login
