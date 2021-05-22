import React from 'react'
import my from "./images/yup.jpg";
import  "./css/style2.css"
import Button  from "@material-ui/core/Button"
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
                    <header>
                    <Button size="Large" onClick={()=>alert("Please! visit Registration Page!")} variant="contained" color="primary">
                    Register
                    </Button>
                        </header>
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
