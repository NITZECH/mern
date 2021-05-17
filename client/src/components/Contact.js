import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Contact = () => {
return (
<>
    <div className="contact_info">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                    {/* phone number */}
                    <div className="contact_info_item d-flex align-items-center justify-content-center">
                    <img src="https://img.icons8.com/android/64/000000/phone.png" alt='phone' /> 
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Phone
                            </div>
                            <div className="contact_info_text">
                                81723712387129837
                            </div>
                        </div>
                    </div>
                    {/* email */}
                    <div className="contact_info_item d-flex align-items-center justify-content-center">
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/email--v3.png"  alt='email' />
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Email
                            </div>
                            <div className="contact_info_text">
                                demo@gmail.com
                            </div>
                        </div>
                    </div>
                    {/* address */}
                    <div className="contact_info_item d-flex align-items-center justify-content-center">
                    <img src="https://img.icons8.com/carbon-copy/64/000000/address.png" alt='adresss' />
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                Address
                            </div>
                            <div className="contact_info_text">
                                Cloud
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* contact form  */}
        <div className="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 ">
                     <div className="contact_form_container py-5">
                         <div className="contact_form_title justify-content-between ">
Get in Touch
                         </div>
                         <form id='contact_form'>
                             <div className="contact_form_name d-flex justify-content-between align-items-center  py-3">
<input type='text' id='contact_form_name'
 className='contact_form_name input_field'
placeholder='Your Name' required='true' />

<input type='email' id='contact_form_email' 
className='contact_form_email input_field'
placeholder='Your Email' required='true' />

<input type='number' id='contact_form_phone' 
className='contact_form_phone input_field'
placeholder='Your Phone Number' required='true' />
                             </div>
<div className="contact_form_text">
    <textarea placeholder='Your Message' className='text_field contact_form_message' id='' cols='30' rows='10'>
        </textarea> 
</div>
<div className="contact_form_button">
    <button className="btn btn-lg btn-outline-secondary" type='submit'> Send Message</button>
</div>

                         </form>
                    </div>   
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</>
)
}

export default Contact