import React from 'react';

 import my from "./images/yup.jpg";
function Contact() {
    return (
        <div class="section contact-page">
        <div class="container">
            <div class="content-section">
                <div class="title">
                    <h1>Contact Us!</h1>
                </div>
                <div class="content">
                <p className="pt-4">Please call us on these numbers to get Admission so we can book your seats!</p>
                    <h2 className="pt-4">Director's Phone No: 8410774355</h2> 
                    <h2>Phone No: 8218074711</h2> 
                    <div  class="button pt-4">
                        <a href="">Thanks! For Visiting</a>
                    </div>
                </div>
                <div class="social">
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="image-section">
                <img src={my} />
            </div>
        </div>
    </div>
    )
}

export default Contact
