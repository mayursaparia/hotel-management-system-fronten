import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Hotel Booking System
                  </h5>

                  <p>
                  Welcome to our hotel booking system, where you have the freedom to book your stay anytime, day or night. With our 24/7 availability, you can enjoy unrestricted access to our hotel facilities and services, ensuring a hassle-free and comfortable stay.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a style={{ "text-decoration":"none" }} href="/about" class="text-color">
                        Learn more about our company and mission
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a style={{ "text-decoration":"none" }} href="contact" class="text-color">
                       Get in touch with our customer service team
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a style={{ "text-decoration":"none" }} href="#!" class="text-color">
                       Join our team and be a part of our mission
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a style={{ "text-decoration":"none" }} href="#!" class="text-color">
                        Blog: Read our travel tips, news, and stories
                      </a>
                    </li>
                    <li>
                      <a style={{ "text-decoration":"none" }} href="#!" class="text-color">
                        FAQ: Find answers to frequently asked questions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Register for free</span>
                <Link to="/user/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2023 Copyright : &nbsp;
            <a class="text-color-3" href="https://www.linkedin.com/in/mayursaparia">
              Mayur Saparia
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
