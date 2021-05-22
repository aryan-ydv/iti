import React from 'react'
import my from "./images/yup.jpg";
import  "./css/style2.css"
function Home() {
    return (
        <div class="section">
        <div class="container">
            <div class="content-section">
                <div class="title">
                    <h1>Home</h1>
                </div>
                <div class="content">
                    <h2 className="pt-4">Admission open 2021</h2> 
                    <div  class="button">
                        <a href="">Please! Register For Seat Booking</a>
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

export default Home
