import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Signup = () => {
return (
<>
    {/* <section className="signup">
        <div className="container mt-5">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign Up</h2>
                    <form action="" className="register-form" id='register-form'>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </form>
                </div>
            </div>
        </div>

    </section> */}


    <section className="signup">
        <div className="container mt-5 mx-auto">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title mx-auto">SIGN UP </h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" />
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"
                                 />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name" />
                            </label><input type="email" name="email" id="email" autoComplete="off"
                                placeholder="Your Email"  /></div>
                        <div className="form-group"><label htmlFor="phone"><i
                                    className="zmdi zmdi-phone-in-talk material-icons-name" />
                            </label><input type="number" name="phone" id="phone" autoComplete="off"
                                placeholder="Your Phone"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="work"><i className="zmdi zmdi-slideshow material-icons-name" />
                            </label><input type="text" name="work" id="work" autoComplete="off"
                                placeholder="Your Profession"  />
                        </div>
                        <div className="form-group"><label htmlFor="password"><i
                                    className="zmdi zmdi-lock material-icons-name" />
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off"
                                placeholder="Your Password"  />
                        </div>
                        <div className="form-group"><label htmlFor="cpassword"><i
                                    className="zmdi zmdi-lock material-icons-name" />
                            </label><input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                placeholder="Confirm Your Password"  />
                        </div>
                        <div className="form-group form-button"><input type="submit" name="signup" id="signup"
                                className="form-submit" defaultValue="register" /></div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wd1udlcz.json"  background="transparent"  speed="0.7"   loop autoplay></lottie-player>
</figure> <h1
                        className="signup-image-link" >Already Registered?</h1>
                       <a class="btn btn-lg btn-outline-primary" href="/login" role="button">Click Here</a>
                       </div>    
            </div>
        </div>
    </section>



</>
)
}

export default Signup