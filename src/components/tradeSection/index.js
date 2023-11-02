import React from 'react'
import fastExecusionIcon from "../../assets/fast-execusion-icon.svg"
import CompetetivePricingIcon from "../../assets/competitive-pricing-icon.svg"
import TechIcon from "../../assets/tech-icon.svg"
import DollorIcon from "../../assets/dollar-icon.svg"


const TradeSection = () => {
  return (
    <div className="container why-trand">
      <div className="row">
        <h2 className="why-trand-title d-block mx-auto text-center"> Why <strong>Trade</strong> with XM?</h2>
        <div className="devider d-block mx-auto"></div>
        <p className="why-trand-detail text-center">We have been providing traders around the world with the same <strong>
          premium experience</strong> for over a<br /> decade. As an <strong>industry-leader,</strong> we know what the
          modern trader needs to be <strong>successful</strong> in the markets.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="trand-card">
            <div className="trand-card-title">Superior Trade<br /> Execution</div>
            <div className="devider d-block trand-devider"></div>
            <p className="trand-card-detail">
              99% of trades are executed in <strong>less than a second,</strong> with no requotes or rejections.
            </p>
            <img src={fastExecusionIcon} className="trade-card-img" />

          </div>
        </div>
        <div className="col-lg-8 col-12 d-flex flex-column">
          <div className="trand-card">
            <div className="trand-card-title">Competitive<br /> Pricing</div>
            <div className="devider d-block trand-devider"></div>
            <p className="trand-card-detail w-75">
              We offer some of the <strong>lowest spreads</strong> and we don’t charge commissions.
            </p>
            <img src={CompetetivePricingIcon} className="price-img" />

          </div>
          <div className="row  mt-4 d-flex h-xl-100 x-lg-100 h-auto">
            <div className="col-lg-6 col-12">
              <div className="trand-card h-100">
                <div className="trand-card-title">Advanced<br /> Technology</div>
                <div className="devider d-block trand-devider"></div>
                <p className="trand-card-detail">
                  Trade on <strong>MT4</strong> or <strong>MT5,</strong> with expert tools, across desktop, web and
                  mobile.
                </p>
                <img src={TechIcon} className="price-img tech-img" />

              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="trand-card h-xl-100 x-lg-100 h-auto">
                <div className="trand-card-title">
                  <br />
                  Start with $5
                </div>
                <div className="devider d-block trand-devider"></div>
                <p className="trand-card-detail">
                  Start trading your preferred instruments with as little as a <strong>$5 minimum deposit.</strong>
                </p>
                <img src={DollorIcon} className="price-img tech-img" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>)
}

export default TradeSection;