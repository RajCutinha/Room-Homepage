// import React
import React, { useEffect, useRef, useState } from "react";

// import Images
import logo from "./images/logo.svg";
import copyDektopHero3 from "./images/desktop-image-hero-3.jpg";
import dektopHero1 from "./images/desktop-image-hero-1.jpg";
import dektopHero2 from "./images/desktop-image-hero-2.jpg";
import dektopHero3 from "./images/desktop-image-hero-3.jpg";
import copyDektopHero1 from "./images/desktop-image-hero-1.jpg";
import aboutImageDark from "./images/image-about-dark.jpg";
import aboutImageLight from "./images/image-about-light.jpg";
import heroArrow from "./images/icon-arrow.svg";
import slideForward from "./images/icon-angle-right.svg";
import slideBack from "./images/icon-angle-left.svg";

// import CSS
import "./index.css";

function App() {
  const heroSlide = [
    copyDektopHero3,
    dektopHero1,
    dektopHero2,
    dektopHero3,
    copyDektopHero1,
  ];
  const [slide, setSlide] = useState(1);
  const [menu, setMenu] = useState(false);
  const backgroundSize = useRef(null);

  function nextState() {
    if (slide >= heroSlide.length - 1) {
      return;
    }
    setSlide((slide) => slide + 1);
    let reset = backgroundSize.current.childNodes;
    reset.forEach((img) => {
      img.style.transition = "all 1s ease-in-out";
    });
  }

  function previousState() {
    if (slide <= 0) {
      return;
    }
    setSlide((slide) => slide - 1);
    let reset = backgroundSize.current.childNodes;
    reset.forEach((img) => {
      img.style.transition = "all 1s ease-in-out";
    });
  }

  useEffect(() => {
    if (slide === heroSlide.length - 1) {
      let reset = backgroundSize.current.childNodes;
      reset[reset.length - 1].addEventListener("transitionend", nextReset, {
        once: true,
      });

      function nextReset() {
        setTimeout(() => {
          reset.forEach((img) => {
            img.style.transition = "none";
          });
          setSlide(reset.length - reset.length + 1);
        }, 0);
      }
    }

    if (slide === 0) {
      let reset = backgroundSize.current.childNodes;
      reset[0].addEventListener("transitionend", nextReset, { once: true });
      function nextReset() {
        setTimeout(() => {
          reset.forEach((img) => {
            img.style.transition = "none";
          });
          setSlide(reset.length - 2);
        }, 0);
      }
    }
  }, [slide]);

  return (
    <React.Fragment>
      <section className="landing">
        <div className="landing-hero">
          <nav>
            <div
              className={`burger ${menu ? "on" : ""}`}
              onClick={() => setMenu((menu) => !menu)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <img src={logo} alt="roomlogo" />
            <ul className={`${menu ? "on" : ""}`}>
              <li>
                <a href="#" onClick={() => setMenu((menu) => !menu)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenu((menu) => !menu)}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenu((menu) => !menu)}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMenu((menu) => !menu)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="landing-background" ref={backgroundSize}>
            {heroSlide.map((heroimg, i) => {
              return (
                <img
                  key={i}
                  src={heroimg}
                  alt="slideimage"
                  style={{
                    transform: "translateX(" + -100 * slide + "% " + ")",
                  }}
                />
              );
            })}
          </div>
          <div className="landing-buttons mobile">
            <div className="landing-slide" onClick={nextState}>
              <img src={slideForward} alt="Arrow Right" />
            </div>
            <div className="landing-slide" onClick={previousState}>
              <img src={slideBack} alt="Arrow Left" />
            </div>
          </div>
        </div>
        <div className="landing-hero-content">
          <div className="slide-container">
            <div
              style={{
                transform: "translateX(" + -100 * slide + "% " + ")",
              }}
            >
              <h1>Manufactured with the best materials</h1>
              <p>
                Our modern furniture store provide a high level of quality. Our
                company has invested in advanced technology to ensure that every
                product is made as perfect and as consistent as possible. With
                three decades of experience in this industry, we understand what
                customers want for their home and office.
              </p>
              <span className="landing-cta">
                Shop now <img src={heroArrow} alt="arrow" />
              </span>
            </div>
            <div
              style={{
                transform: "translateX(" + -100 * slide + "% " + ")",
              }}
            >
              <h1>Discover innovative ways to decorate</h1>
              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form andnfunction
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <span className="landing-cta">
                Shop now <img src={heroArrow} alt="arrow" />
              </span>
            </div>
            <div
              style={{
                transform: "translateX(" + -100 * slide + "% " + ")",
              }}
            >
              <h1>We are available all across the globe</h1>
              <p>
                With stores all over the world, it's easy for you to find
                furniture for your home or place of business. Locally, we’re in
                most major cities throughout the country. Find the branch
                nearest you using our store locator. Any questions? Don't
                hesitate to contact us today.
              </p>
              <span className="landing-cta">
                Shop now <img src={heroArrow} alt="arrow" />
              </span>
            </div>
            <div
              style={{
                transform: "translateX(" + -100 * slide + "% " + ")",
              }}
            >
              <h1>Manufactured with the best materials</h1>
              <p>
                Our modern furniture store provide a high level of quality. Our
                company has invested in advanced technology to ensure that every
                product is made as perfect and as consistent as possible. With
                three decades of experience in this industry, we understand what
                customers want for their home and office.
              </p>
              <span className="landing-cta">
                Shop now <img src={heroArrow} alt="arrow" />
              </span>
            </div>
            <div
              style={{
                transform: "translateX(" + -100 * slide + "% " + ")",
              }}
            >
              <h1>Discover innovative ways to decorate</h1>
              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form andnfunction
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <span className="landing-cta">
                Shop now <img src={heroArrow} alt="arrow" />
              </span>
            </div>
          </div>
          <div className="landing-buttons">
            <div className="landing-slide" onClick={nextState}>
              <img src={slideForward} alt="Arrow Right" />
            </div>
            <div className="landing-slide" onClick={previousState}>
              <img src={slideBack} alt="Arrow Left" />
            </div>
          </div>
        </div>
        <div className="landing-footer-container">
          <div className="landing-footer-img">
            <img src={aboutImageDark} alt="About Image" />
          </div>
          <div className="landing-footer-content">
            <h3>About our furniture</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="landing-footer-img">
            <img src={aboutImageLight} alt="About Image" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
