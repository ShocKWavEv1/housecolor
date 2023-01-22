import React, { useEffect } from "react"

const Horizontal = () => {
    return(
      <div class="container">
      <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
        <div>
          <h1 data-scroll data-scroll-speed="1"><span>Horizontal</span> <span>scroll</span> <span>section</span></h1>
          <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">with GSAP ScrollTrigger & Locomotive Scroll</p>
        </div>
  
      </section>
  
      <section id="sectionPin">
        <div class="pin-wrap">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
  
        </div>
      </section>
      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <h2 data-scroll data-scroll-speed="1" class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></h2>
      </section>
    </div>
    )
}

export default Horizontal