import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
     const [allOrders, setAllOrders] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        setAllOrders(res.data);
      });
    }, [allOrders]);
  return (
    <>{!allOrders.length>0?<NoOrders />:
         <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>price</th>
             <th>mode</th>
            
          </tr>
            {allOrders.map((stock, index) => {

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      </>
    }
    </>
  );
};


export default Orders;

const NoOrders=()=>{
  return(
     <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
       
      </div>
    </div>
  )
}

