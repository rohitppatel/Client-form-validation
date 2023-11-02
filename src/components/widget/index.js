import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../styles/styles.css"
import BCH from "../../assets/BCH.svg"

const Widget = () => {

  const [widget, setWidget] = useState([]);


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coinlore.net/api/tickers/');
      setWidget(response.data.data);
    } catch (error) {
      throw('Error fetching data:', error);
    }
  };

 
  const RenderList = () => {
    return (
      widget.slice(0, 5).map((data, i) => (
        <div className="card" key={i}>
          <div className="d-flex align-items-center gap-2">
            <img src={BCH} alt={data.symbol} className="" />
            <p className="card-title m-0">{data.symbol}</p>
            <span className="chip">{data.name}</span>
          </div>
          <div className="devider"></div>
          <strong className="price">${data.price_usd}</strong>
          <p className="incress w-100 mb-0">
            <i className="fa fa-circle-chevron-up"></i>
            {data.percent_change_1h}%
          </p>
        </div>
      ))
    );
  };

  return (
    <div className="container coins-list">
      <div className="row d-flex justify-content-evenly justify-content-md-around flex-wrap flex-md-row flex-col">
        <RenderList/>
      </div>
    </div>
  )
}

export default Widget