import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'


const Signup = () => {

const history = useHistory();
const [user, setUser] = useState({
name:'',
email:'',
phone:'',
work:'',
password:'',
cpassword:''
})
//this is declared in out of the scope of handleInput function so that it can be used by all the members of "user" object
let name, value;
const handleInput = (e) => {
console.log(e);
name = e.target.name;
value = e.target.value;
setUser({ ...user, [name]: value});
};

//this is a function to send data to backend
const PostData = async (e) => {
e.preventDefault();
//to prevent page from refreshing
const {
name,
email,
phone,
work,
password,
cpassword
} = user;

//from object destrucing we can get the all the data at once

//now fetching the api using fetch, we can use axios but it can also be achieved by simple fetch

const res = await fetch('/register', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name,
email,
phone,
work,
password,
cpassword
    })
});

const data = await res.json();

if(data.status === 422 || !data ){
    console.log('Invalid Registration');
    window.alert('Invalid Registration');
}else {
    console.log('Registration Successfull');
    window.alert('Registration Successfull'); 
    history.push('/login');
}


}


return (
<>

    <section className="signup">
        <div className="container mt-5 mx-auto">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title mx-auto">SIGN UP </h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label className='label-form' htmlFor="name"><i
                                    className="zmdi zmdi-account material-icons-name" />
                            </label>
                            <input type="text" name="name" id="name" value={user.name} onChange={handleInput}
                                autoComplete="off" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="email"><i
                                    className="zmdi zmdi-email material-icons-name" />
                            </label><input type="email" name="email" id="email" value={user.email}
                                onChange={handleInput} autoComplete="off" placeholder="Your Email" /></div>
                        <div className="form-group"><label className='label-form' htmlFor="phone"><i
                                    className="zmdi zmdi-phone-in-talk material-icons-name" />
                            </label><input type="number" name="phone" id="phone" value={user.phone}
                                onChange={handleInput} autoComplete="off" placeholder="Your Phone" />
                        </div>
                        <div className="form-group">
                            <label className='label-form' htmlFor="work"><i
                                    className="zmdi zmdi-slideshow material-icons-name" />
                            </label><input type="text" name="work" id="work" value={user.work} onChange={handleInput}
                                autoComplete="off" placeholder="Your Profession" />
                        </div>
                        <div className="form-group"><label className='label-form' htmlFor="password"><i
                                    className="zmdi zmdi-lock material-icons-name" />
                            </label>
                            <input type="password" name="password" id="password" value={user.password}
                                onChange={handleInput} autoComplete="off" placeholder="Your Password" />
                        </div>
                        <div className="form-group "><label className='label-form' htmlFor="cpassword"><i
                                    className="zmdi zmdi-lock material-icons-name " />
                            </label><input type="password" name="cpassword" id="cpassword" value={user.cpassword}
                                onChange={handleInput} autoComplete="off" placeholder="Confirm Your Password" />
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-center">
                            <input type="submit" name="signup" id="signup"
                                className="form-submit btn btn-primary  btn-lg" value="Sign Up" onClick={PostData} />
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure>
                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wd1udlcz.json"
                            background="transparent" speed="0.7" loop autoplay></lottie-player>
                    </figure>
                    <h1 className="signup-image-link">Already Registered?</h1>
                    <NavLink class="btn btn-lg btn-outline-dark" to="/login" role="button">Login</NavLink>
                </div>
            </div>
        </div>
    </section>



</>
)
}

export default Signup