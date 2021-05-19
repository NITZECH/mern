import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const About = () => {

const history = useHistory();

    const callAboutPage = async () => {
try{
const res = await fetch('/about', {
method: "GET",
headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
}, credentials: 'include'
});

const data = await res.json();
console.log(data);

if (!res.status === 200){
    throw new Error(res.error);
}

} catch(err){
    console.log(err);
    history.push('/login');
    
}
 }

 useEffect(() => {
        callAboutPage();
 });

return (
<>
    <div className="container emp-profile">
        <form method="GET">
            <div className="row">
                <div className="col-md-4 profile-img">
                    <img src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-1/c122.257.968.968a/s240x240/174440514_2816772958540496_4707193922734414668_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=E1vZCxyCsQsAX8s6MeK&_nc_ht=scontent.fpkr2-1.fna&tp=28&oh=5b1b56a8d5c8a9aa95e924282e04cb36&oe=60C8BFF7"
                        alt="" />
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                        <h5>Nitesh Devkota</h5>
                        <h6>Web developer</h6>
                        <p className='profile-rating mt-3 mb-5'>RANKINGS: <span> 7/ 10</span> </p>

                        <ul className="nav nav-tabs" role='tablist'>
                            <li className="nav-item">
                                <a href="#home" className="nav-link active" id='home-tab' data-toggle='tab' aria-controls='tab'
                                    role='tab'>Active</a>
                            </li>
                            <li className="nav-item">
                                <a href="#profile" className="nav-link " id='profile-tab' data-toggle='tab' aria-controls='tab'
                                    role='tab'>Timeline</a>
                            </li>
                        </ul>


                    </div>

                </div>
                <div className="col-md-2">
                  <button className="btn btn-lg btn-outline-dark" name='btnAddMore'>Edit Profile</button>
                </div>
                <div className="row">
                    {/* left side url */}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Work Link</p>
                            <a href="https://github.com/NITZECH" target='_nitesh'>GitHub</a> <br />
                            <a href="https://github.com/NITZECH" target='_nitesh'>GitHub</a> <br />
                            <a href="https://github.com/NITZECH" target='_nitesh'>GitHub</a> <br />
                            <a href="https://github.com/NITZECH" target='_nitesh'>GitHub</a> <br />
                            <a href="https://github.com/NITZECH" target='_nitesh'>GitHub</a> <br />
                        </div>
                    </div>
                    {/* right side data toggle */}
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id='myTabContent'></div>
                        <div className="tab-pane fade show active collapse"  id='home' role='tabpanel'>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>65464646</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nitesh Devkota</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nitesh Devkota</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nitesh Devkota</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Nitesh Devkota</p>
                                </div>
                            </div>
                       </div>

                       {/* profile tab  */}

                       <div className="tab-pane fade collapse " id='profile' role='tabpanel'   aria-labelledby='profile-tab'>

<div className="row">
    <div className="col-md-6">
        <label>Experience</label>
    </div>
    <div className="col-md-6">
        <p>Intermediate</p>
    </div>
</div>

<div className="row mt-3">
    <div className="col-md-6">
        <label>Hourly Rate</label>
    </div>
    <div className="col-md-6">
        <p>$35/hr</p>
    </div>
</div>

<div className="row mt-3">
    <div className="col-md-6">
        <label>Total Projects</label>
    </div>
    <div className="col-md-6">
        <p>100</p>
    </div>
</div>
<div className="row mt-3">
    <div className="col-md-6">
        <label>English Level</label>
    </div>
    <div className="col-md-6">
        <p>Fluent</p>
    </div>
</div>
</div>


                    </div>
                </div>
            </div>
        </form>
    </div>
</>
)
}

export default About