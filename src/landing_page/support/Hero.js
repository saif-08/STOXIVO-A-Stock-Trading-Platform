import React from 'react';

function Hero() {
    return ( 
          <section className="container-fluid" id="supportHero">
      <div className="supportWrapper p-5 " >
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" supportWrapper2 pb-5 pt-3">
        <div className=' col-6 px-5 mb-4'>
          <h2 className="fs-3 pb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input className='fs-6 mb-3' placeholder="Eg. how do I activate F&O,why is my order getting rejected" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday </a>
          <br/>
           <a href=""> margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className='col-6 mb-5'style={{marginLeft:"80px"}} >
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className='pb-2 '>
              <a className='fs-6' href="" >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
     );
}

export default Hero;