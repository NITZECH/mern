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
                        <img src="" alt="" />
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
                        <img src="" alt="" />
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
                        <img src="" alt="" />
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
        
        </div>
    </div>
</>
)
}

export default Contact