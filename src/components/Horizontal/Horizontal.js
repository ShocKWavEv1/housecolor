import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react"

const Horizontal = () => {

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector(".container");
      
      /* SMOOTH SCROLL */
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true
      });
      
      scroller.on("scroll", ScrollTrigger.update);
      
      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
      });
      
      ////////////////////////////////////
      ////////////////////////////////////
      window.addEventListener("load", function () {
        let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        let pinWrap = document.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      
        // Pinning and horizontal scrolling
      
        gsap.to(".pin-wrap", {
          scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
          },
          x: -horizontalScrollLength,
          ease: "none"
        });
      
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
      
        ScrollTrigger.refresh();
      });
    }, [])

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
      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
        <h2 data-scroll data-scroll-speed="1" class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></h2>
      </section>
    </div>
    )
}

export default Horizontal