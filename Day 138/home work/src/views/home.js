import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Contact10 from '../components/contact10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Welcome Colossal Whale</title>
        <meta property="og:title" content="Welcome Colossal Whale" />
      </Helmet>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text10">Discover More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Explore Models</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text12">
              Explore the power and luxury of the BMW M5 F90. Get ready for an
              adrenaline-filled ride like never before.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">
              Welcome to the BMW M5 F90 Experience
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text14">Sleek Design</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text15">Luxurious Interior</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text16">V8 Engine Performance</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text17">
              The BMW M5 F90 boasts a modern and aerodynamic design
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text18">
              Enjoy the luxury of a premium interior with leather seats and
              advanced technology
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text19">
              Experience the power of the V8 engine with 600 horsepower
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text20">Powerful Performance</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text21">Luxurious Interior</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text22">Advanced Technology</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text23">
              The BMW M5 F90 is equipped with a powerful V8 engine that delivers
              exhilarating performance on the road.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text24">
              Experience luxury inside the BMW M5 F90 with premium materials,
              advanced technology, and comfortable seating.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text25">
              Stay connected and in control with the latest technology features
              including a digital cockpit and intuitive infotainment system.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text26">
              Hai domande o vuoi saperne di più sulla BMW M5 F90? Contattaci
              utilizzando il modulo sottostante o tramite i nostri recapiti
              telefonici.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Contattaci</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text28">Indirizzo:</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text29">Telefono:</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text30">
              Via delle Auto Veloci, 123 - 00123, Motorcity
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text31">+39 0123 456789</span>
          </Fragment>
        }
      ></Contact10>
    </div>
  )
}

export default Home
