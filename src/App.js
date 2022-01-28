import React from 'react';

import './style.css';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Log out
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
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
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
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
      <div class="container-fluid ">
        <div class="card">
          <div class="card-header">
            <p class="card-title">
              <span class="badge bg-secondary">ROOKIE * 500 POINTS</span>
            </p>
            <span class="badge bg-secondary"></span>
            <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="true"
                  data-bs-toggle="tab"
                  href="#dhcp"
                >
                  Level one
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#static">
                  Level Two
                </a>
              </li>
            </ul>
          </div>
          <form class="card-body tab-content">
            <div class="tab-pane active" id="dhcp">
              <p class="card-text"></p>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      #1 Project Requirements
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      User Stories <br></br>
                      1. I as a user will like to log on to a System securely.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      #2 Setup
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      We are going to be using Stackblitz as an IDE for
                      Development &nbsp;
                      <a href="https://stackblitz.com/" target="_blank">
                        <span class="badge bg-secondary">
                          {' '}
                          Create a Stackblitz Account
                        </span>
                      </a>
                      <br></br>
                      Stackblitz is a browser based IDE that contains
                      preconfigured development stacks and is closer to VS Code
                      in nature &nbsp;
                      <a
                        href="https://www.youtube.com/watch?v=sPXtu-_4gRo"
                        target="_blank"
                      >
                        <span class="badge bg-secondary">watch video</span>
                      </a>
                      <br></br>
                      We are going to be using React as our Java Script front
                      end framework for development <br></br>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      #3 First React App on Stackblitz
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <h5>
                        Start a preconfigured React App on&nbsp;
                        <a
                          href="https://stackblitz.com/edit/react-nmxrbm?file=src%2FApp.js"
                          target="_blank"
                        >
                          <span class="badge bg-secondary">
                            start React App
                          </span>
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="static"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
