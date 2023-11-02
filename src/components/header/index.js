import React from "react";

const Header = () => {
  return <>
   <div className="container FED-topbanner">
      <div className="w-75 mx-auto">
        <span className="trand-title w-100 text-center d-block">trade with</span>
        <h1 className="FED-banner-title w-100 text-center d-block m-0"><strong>Zero Swaps</strong> on All XM Ultra Low<br/>
          Accounts for more than 25 instruments!
        </h1>
        <p className="FED-banner-detail m-0 mx-auto d-block text-center">Enjoy spreads <strong>as low as 0.6 pips and
            leverage up to 1000:1</strong> on<br/> instruments like <strong>EURUSD, USDJPY, EURJPY, GBPUSD,</strong> and
          <strong>Gold.</strong></p>
        <button className="FED-banner-btn d-block">open account</button>
        <p className="try-tranding">New to trading? Try a <a href="#">Demo account.</a></p>

        <p className="try-tranding m-0">Terms and Conditions apply<span className="text-red">*</span>. To read the full T&Cs,
          <span className="text-red">click here.</span></p>
      </div>
    </div>
  </>
}

export default Header