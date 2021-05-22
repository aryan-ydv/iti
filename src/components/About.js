import React from 'react'
import "./css/style.css"
import yes from "./images/yes.jpg"
function AboutUs() {
    return (
      // <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">
      <div class="section aboutPage">
      <div class="container">
          <div class="content-section">
              <div class="title">
                  <h1>welcome!</h1>
              </div>
              <div class="content">
                  <h3>JaiRam Singh Pvt Iti Bilram</h3>
                  <p>हम अपने क्षेत्र में ईमानदार प्रशिक्षण संस्थान हैं, इसमें कोई संदेह नहीं है कि छात्र / प्रशिक्षु किसी भी संस्थान को परिपूर्ण बनाते हैं, लेकिन हम पर भरोसा करें और हम आपको निराश नहीं करेंगे और आप हमारे साथ अपने सपनों पर उतरेंगे। स्थापना के बाद से हमारे प्रशिक्षक प्रशिक्षु के साथ बहुत मेहनत कर रहे हैं! हमें विश्वास है कि हम आपको निराश नहीं करेंगे</p> 
                  <div class="button">
                      <a href="">Read More</a>
                  </div>
              </div>
              <div class="social">
                  <a href=""><i class="fab fa-facebook-f"></i></a>
                  <a href=""><i class="fab fa-twitter"></i></a>
                  <a href=""><i class="fab fa-instagram"></i></a>
              </div>
          </div>
          <div class="image-section">
              <img src={yes} />
          </div>
      </div>
  </div>
    )
}

export default AboutUs
