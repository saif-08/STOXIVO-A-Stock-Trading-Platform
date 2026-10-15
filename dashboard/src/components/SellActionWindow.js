import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./ActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isStockNotExist, setisStockNotExist] = useState(false);
  const [isQuantityNotAvailable, setisQuantityNotAvailable] = useState(false);

  const HandleSellClick = async () => {

    let res = await axios.get(`http://localhost:3002/Order/${uid}`);
    let availableStock = res.data;
    if (availableStock == "not found") {
      setisStockNotExist(true);
    } else {
      const totalAvailableQty = availableStock.filter((stock)=>(stock.mode=="Buy")).reduce((sum, stock) => {
        return sum + stock.qty;
      }, 0);
      console.log(totalAvailableQty);
      if(totalAvailableQty>stockQuantity){
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });
      generalContext.closeWindow();
    }else{
      setisQuantityNotAvailable(true);
    }
    }


  };

  const HandleCancelClick = () => {
    generalContext.closeWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        <span>stockName:({uid})</span>
      </div>
      {isStockNotExist && <div style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
        <span>you dont have this stock,please buy it first</span>
      </div>}
       {isQuantityNotAvailable&& <div style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
        <span>buy stock,as either you don't have stock or enough Quantity </span>
      </div>}
      <div className="buttons">
        <span>Margin required ₹140.65{isStockNotExist}</span>
        <div>
          <Link className="btn btn-blue" onClick={HandleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={HandleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;