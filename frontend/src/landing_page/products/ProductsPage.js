import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Hero from "./Hero";
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

 function ProductsPage() {
   const { isAuthenticated,user,verifyAuth } = useAuth();
       const navigate = useNavigate();
        const [cookies, removeCookie] = useCookies([]);
        const [username, setUsername] = useState("");
           
 
       useEffect(()=> {
          const verifyCookie = async () => {

          if(user){
             toast.success(`hello ${user}`, {
              position:"top-right",
            })}else{
              removeCookie("token");
               navigate("/login");
            }
          }

         verifyCookie();

        },[]);

        const Logout = () => {
          removeCookie("token");
          navigate("/signup");
        };

    return ( 
        <>
        <Hero />
          <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Stoxivo account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Stoxivo.tech
        blog.
      </p>
        <Universe />
      
        </>
     );
}

export default ProductsPage;