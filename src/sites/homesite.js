import React from "react";
import statistics from "../images/statistics.png";
import playbutton from "../images/play-button.png";
import secind from "../images/secind.png";
import first from "../images/first.png";
import third from "../images/third.png";
import touchscreen from "../images/touch-screen.png";
import analytics from "../images/analytics.png";
import imgfirst from "../images/imgfirst.png";
import imgsecond from "../images/imgsecond.png";
import stats from "../images/stats.png";
import footerimg from "../images/footerimg.png";
import { Link } from "react-router-dom";
import "../App.css";
//Loginsite
import Loginsite from "./loginsite";

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function handleopen() {
  var navi = document.getElementById("navigation");
  navi.classList.toggle("active");
  var span1 = document.getElementById("spanfirst");
  span1.classList.toggle("spin");
  var span2 = document.getElementById("spansecond");
  span2.classList.toggle("spin");
  var span3 = document.getElementById("spanthird");
  span3.classList.toggle("none");
}

function Homesite() {
  return (
    <body id="body">
      <div className="sitewrapper" id="wrapper">
        <div className="top">
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
          <div className="headerwrapper" id="headerwrapper">
            <div className="holder">
              <div className="burger" onClick={handleopen}>
                <span id="spanfirst" className="spanfirst"></span>
                <span id="spansecond" className="spansecond"></span>
                <span id="spanthird" className="spanthird"></span>
              </div>
            </div>
            <nav id="navigation">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Fees</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </nav>
            <Link className="signin" to="/login">
              Log In
            </Link>
          </div>
        </div>
        <header>
          <div className="headercontent">
            <h2>Customer Platform</h2>
            <p>
              For Your Service <br />
              <span>Pay Now event trough our new Online Shop</span>
            </p>
            <a className="btnone" href="#">
              TAKE TO SALES
            </a>
            <a className="btntwo" href="#">
              DISCOVER
            </a>
          </div>
          <img src={statistics} className="headerimg" alt="static" />
        </header>

        <main>
          <div className="playbtn">
            <img src={playbutton} alt="play" />
            <p>Play Video</p>
          </div>
          <div className="row">
            <div className="first">
              <img src={secind} alt="sec" />
              <p>
                Web data services enable maximal <br />
                mashup, reuse, and sharing <br />
                <br />
                <span>Lear More</span>
              </p>
            </div>
            <div className="secnd">
              <img src={first} alt="first" />
              <p>
                Web data services enable maximal <br />
                mashup, reuse, and sharing <br />
                <br />
                <span>Lear More</span>
              </p>
            </div>
            <div className="third">
              <img src={third} alt="third" />
              <p>
                Web data services enable maximal <br />
                mashup, reuse, and sharing <br />
                <br />
                <span>Lear More</span>
              </p>
            </div>
          </div>
          <section>
            <div className="rowblock">
              <div className="block">
                <h1>Data conversion</h1>
                <div className="firstblock">
                  <h3>Dashboard</h3>
                  <p>
                    Whenever any one of these variables is changed. <br />
                    data must be conveted in some way before it can...
                  </p>
                </div>
                <div className="secondblock">
                  <h3>Require processing</h3>
                  <p>
                    Whenever any one of these variables is changed. <br />
                    data must be conveted in some way before it can invalabel a
                    <br />
                    compley process
                  </p>
                </div>
                <a href="#">LEARN MORE</a>
              </div>
              <div>
                <img src={touchscreen} className="phone" alt="phone" />
              </div>
            </div>
          </section>
          <div className="spacer">
            <img src={analytics} alt="imgspacer" />
            <h1>Apply analytics to business</h1>
            <p>
              A common application of business analytics is portfolio analysis.
              In this, a <br />
              bank or landing agency has a collection.
            </p>
            <a href="#">Learn More</a>
          </div>
          <div className="lastsection">
            <div className="firstrow">
              <img src={imgfirst} alt="first" />
              <img className="movedimg" src={imgsecond} alt="second" />
            </div>
            <div className="secondrow">
              <h1>Data validation</h1>
              <p>well-defined guarantees</p>
              <img src={stats} alt="statsblock" />
            </div>
          </div>
        </main>
        <footer>
          <img src={footerimg} alt="footerimg" />
          <div className="imp">
            <a href="#">OVERVIEW</a>
            <a href="#">DOCUMENTATION</a>
            <a href="#">COMPANY</a>
            <a href="#">COMMUNITY</a>
          </div>
          <input type="text" placeholder="search..." />
        </footer>
      </div>
    </body>
  );
}

export default Homesite;
