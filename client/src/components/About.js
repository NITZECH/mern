import React from 'react'

const About = () => {
    return (
        <>
           <div className="container emp-profile">
               <form>
                  <div className="row">
                      <div className="col-md-4">
                          <img src="https://scontent.fpkr2-1.fna.fbcdn.net/v/t1.6435-1/c122.257.968.968a/s240x240/174440514_2816772958540496_4707193922734414668_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=E1vZCxyCsQsAX8s6MeK&_nc_ht=scontent.fpkr2-1.fna&tp=28&oh=5b1b56a8d5c8a9aa95e924282e04cb36&oe=60C8BFF7" alt="" />
                      </div>
                      <div className="col-md-6">
<div class="profile-head">
    <h5>Vinod thapa</h5>
    <h6>Web developer</h6>
    <p className='profile-rating mt-3 mb-5'>RANKINGS: <span> 1/ 10</span> </p>

<ul className="nav nav-tabs" role='tablist'>
    <li className="nav-item">
        <a href="#home" className="nav-link active" id='home-tab' data-toggle='tab' role='tab'  >Active</a>
    </li>
    <li className="nav-item">
    <a href="#about" className="nav-link active" id='profile-tab' data-toggle='tab' role='tab'  >Timeline</a>
    </li>
</ul>


</div>

                      </div>
                      <div className="col-md-2">
                          <input type="text" name='btnAddMore' className="profile-edit-btn" value='Edit Profile' />
                      </div>
                      <div className="row">
                          {/* left side url */}
<div className="col-md-4">
    <div className="profile-work">
        <p>Work Link</p>

    </div>
</div>
{/* right side data toggle  */}


                      </div>
                      </div> 
                   </form> </div>     
        </>
    )
}

export default About
