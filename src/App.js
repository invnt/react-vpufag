import React from 'react';

import './style.css';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            XP LABS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <img
              src="https://www.w3schools.com/w3images/avatar1.png"
              alt="Avatar"
              class="avatar"
            ></img>
          </div>
        </div>
      </nav>

      <div class="container mt-5">
        <h1 class="display-6">Start the Journey - Get the Tools</h1>
        <br></br>
        <div class="row">
          <div class="col-sm-4">
            <img
              src="https://i.postimg.cc/sD26mQPg/reshot-illustration-website-design-YGMR84-JX3-L-1.png"
              class="float-start"
              alt="Paris"
              width="504"
              height="336"
            ></img>
          </div>
          <br></br>
          <div class="col-sm-12">
            <h5># 1 Chrome Browser</h5>
            <hr></hr>
            <p>
              Chrome is the defacto # 1 Browser for Developers World wide.
              Chrome is designed to be the fastest web browser. With one click,
              it loads web pages, multiple tabs, and applications with lightning
              speed. Chrome is fitted with V8, a faster and more powerful
              JavaScript engine. Chrome also loads web pages faster by using the
              WebKit open source rendering engine.
            </p>

            <p>
              <a
                class="btn btn-dark"
                href="https://www.google.com/chrome"
                target="_blank"
                role="button"
              >
                Get Chrome
              </a>
            </p>
            <br></br>
            <hr class="d-sm-none"></hr>
            <h5># 2 Gmail Account</h5>
            <hr></hr>
            <p>
              Gmail is the Free email offered by Google and it will be used
              access All other tools needed for Developement. Create an new
              Account eg name.xplabs@gmail.com and Create a strong password for
              your Account
            </p>

            <p>
              <a
                class="btn btn-dark"
                href="https://www.google.com/gmail/about/"
                target="_blank"
                role="button"
              >
                Get Gmail
              </a>
            </p>
            <br></br>
            <h5># 3 Stackblitz</h5>
            <hr></hr>
            <p>
              StackBlitz is an online IDE (integrated development environment)
              where you can create Angular, React, and Vue projects quickly and
              easily in your browser.
            </p>

            <p>
              <button type="button" class="btn btn-dark">
                Get Stackblitz
              </button>
            </p>
            <br></br>
            <h5># 4 Netlify</h5>
            <hr></hr>
            <p>
              Netlify is a web developer platform that multiplies productivity.
              By unifying the elements of the modern decoupled web, from local
              development to advanced edge logic, Netlify enables a 10x faster
              path to much more performant, secure, and scalable websites and
              apps . Free to use.
            </p>

            <p>
              <button type="button" class="btn btn-dark">
                Get Netlify
              </button>
            </p>
            <br></br>
            <h5># 5 Heroku</h5>
            <hr></hr>
            <p>
              Developers use Heroku to deploy, manage, and scale modern apps.
              Our platform is elegant, flexible, and easy to use, offering
              developers the simplest path to getting their apps to market. ...
              The Heroku experience provides services, tools, workflows, and
              polyglot support—all designed to enhance developer productivity .
              Free to use.
            </p>

            <p>
              <button type="button" class="btn btn-dark">
                Get Heroku
              </button>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-5 p-4  text-center">
        <p>xplabs.online</p>
      </div>
    </div>
  );
}
