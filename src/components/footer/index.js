import React from 'react'
import supportImg from "../../assets/support.png"
import awardImg from "../../assets/award.png"
import fairImg from "../../assets/fair.png"
import regulatedImg from "../../assets/regulated.png"
import Trending from "../../assets/tranding.svg"
import Reactangle1 from "../../assets/Rectangle-1.png"
import Rectangle2 from "../../assets/Rectangle-2.png"
import Rectangle3 from "../../assets/Rectangle-3.png"
import Rectangle from "../../assets/Rectangle.png"



const Footer = () => {
  return (
    <>
      <section className="FED-learn">
        <div className="container">
          <div className="row mx-0">
            <div className="col-12 col-md-12 col-lg-4  col-offset-1">
              <div className="event-lg-title">
                <div className="border-red-top text-center text-lg-left mx-auto mx-lg-0"></div>
                <div className="d-flex d-lg-block gap-2 justify-content-center">
                  <h2 className="fw-bold">Big<span>.</span>
                    <br />
                    Fare<span>.</span>
                    <br />
                    Human<span>.</span>
                  </h2>
                </div>
                <p className="w-md-sc text-center text-lg-start">Learn why <span className="fw-bold">over 5 million clients choose
                  XM</span> as their trusted online broker.</p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <div className="row mx-0 flex-wrap align-items-start FED-learn-col">
                <div className="col-12 col-md-6 FED-learn-col-first">
                  <div className="text-center text-md-start">
                    <img src={regulatedImg} alt="Authorised and Regulated" />
                    <h5 className="py-2 fw-semibold">Authorised and Regulated</h5>
                    <p className="pe-4">At XM, we adhere to all regulatory standards and are fully authorised and regulated by
                      FSC.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 FED-learn-col-first">
                  <div className="text-center text-md-start">
                    <img src={fairImg} alt="Committed and Fair" />
                    <h5 className="py-2 fw-semibold">Committed and Fair</h5>
                    <p className="pe-4">We operate with complete transparency and adhere to the highest professional and ethical
                      standards.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-center text-md-start">
                    <img src={awardImg} alt="Multi-Award-Winning" />
                    <h5 className="py-2 fw-semibold">Multi-Award-Winning</h5>
                    <p className="pe-4">Over the years we have received over 40 awards for the quality of our products and
                      services.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-center text-md-start">
                    <img src={supportImg} alt="24/7 Support" />
                    <h5 className="py-2 fw-semibold">24/7 Support</h5>
                    <p className="pe-4">Over the years we have received over 40 awards for the quality of our products and
                      services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="FED-footer p-3">
        <div className="container">
          <div className="d-lg-flex d-none w-100  footer-seperate justify-content-between">
            <div className="d-flex align-items-center gap-5">
              <img src={Rectangle} className="brand-img" />

              <img src={Reactangle1} className="brand-img" />

              <img src={Rectangle2} className="brand-img" />

              <img src={Rectangle3} className="brand-img" />
            </div>
            <div
              className="py-3 text-end d-none d-md-flex align-items-center justify-content-md-end justify-content-center gap-3">
              <small>Follow us on</small>
              <div className="d-flex align-items-center justify-content-lg-start py-3 gap-2 social">
                <a href="#" className="px-1 text-decoration-none">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="px-1 text-decoration-none">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="px-1 text-decoration-none">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#" className="px-1 text-decoration-none">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="px-1 text-decoration-none">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-md-between justify-content-center flax-xl-row  flex-lg-row flex-column py-3 gap-2 w-100">
            <div>
              <a href="#" className="border-end border-1 pe-3 text-decoration-none mb-0 my-3">Privacy Policy</a>
              <a href="#" className="border-end border-1 pe-3 text-decoration-none mb-0 my-3">Cookie Policy</a>
              <a href="#" className="pe-3 text-decoration-none mb-0 my-3">Terms and Conditions</a>
            </div>
            <img src={Trending} />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer