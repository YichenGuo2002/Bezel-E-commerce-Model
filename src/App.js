import './App.css'; // page css
import './style.css'; // tailwind css script
import React, { useState, useEffect } from "react";

function App(props) {
  const orderEmpty = {
    "id": 0,
    "listing": {},
    "salePriceCents": 0,
    "commissionRateBips": 0,
    "sellerFeeCents": 0,
    "payoutAmountCents": 0
  }
  const [isOpen, setIsOpen] = useState(true);
  const [order, setOrder] = useState(orderEmpty);
  const [errorMessage, setErrorMessage] = useState("");

  const openBg = () => {
    setIsOpen(true);
  };

  const closeBg = () => {
    setIsOpen(false);
  };

  const convertMoney = (cents) =>{
    
  };

  const getOrder = async () =>{
    let orderUrl = 'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123';
    await fetch(orderUrl, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
      //body: JSON.stringify(data),
  })
    .then(response =>{
      //check if status code is valid
      if (response.ok) { 
        return response.json()
      }else{
        throw new Error(response.status + " Failed GET.");
      }
    })
    .then(data =>{
      setOrder(data);
    })
    .catch(err =>{
      setErrorMessage("Sorry, failed to load the order. Try again later!");
      console.log(err)
    })
  }

  const acceptSale = async () =>{
    let acceptUrl = 'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept';
    await fetch(acceptUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"}
      //body: JSON.stringify(data),
  })
    .then(response =>{
      //check if status code is valid
      if (response.ok) { 
        console.log("Sale Accepted.")
        closeBg();
      }else{
        throw new Error(response.status + " Failed POST.");
      }
    })
    .catch(err =>{
      setErrorMessage("Sorry, failed to accept the sale. Try again later!");
      console.log(err)
    })
  }

  const rejectSale = async () =>{
    let rejectUrl = 'https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline';
    await fetch(rejectUrl, {
      method: "POST",
      headers: {"Content-Type": "application/json"}
      //body: JSON.stringify(data),
  })
    .then(response =>{
      //check if status code is valid
      if (response.ok) { 
        console.log("Sale Rejected.")
        closeBg();
      }else{
        throw new Error(response.status + " Failed POST.");
      }
    })
    .catch(err =>{
      setErrorMessage("Sorry, failed to reject the sale. Try again later!");
      console.log(err);
    });
  }

  let close = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    className = "h-6 w-6" viewBox="0 0 100.000000 100.000000"
    preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M137 863 c-16 -17 -9 -26 155 -190 l173 -173 -173 -173 c-164 -164
    -171 -173 -155 -190 17 -16 26 -9 190 155 l173 173 173 -173 c164 -164 173
    -171 190 -155 16 17 9 26 -155 190 l-173 173 173 173 c164 164 171 173 155
    190 -17 16 -26 9 -190 -155 l-173 -173 -173 173 c-164 164 -173 171 -190 155z"/>
    </g>
    </svg>
  )

  useEffect(() => {
    getOrder();
  }, [])

  return (
    <div className = "fixed top-0 left-0 w-full h-full flex items-center justify-center font-sans">
      {
        isOpen?
        (
        <div className="popUp relative bg-popup w-3/5 min-h-4/6 grid grid-cols-2 rounded-3xl p-8">
        
        <div className = "actionPanel h-full flex flex-col place-content-between pl-4 pr-4">
          <div className = "p-8">
            <p className = "mb-2 text-neutral-400">CONGRATS!</p>
            <p className = "text-2xl mb-8 text-btn font-bold">Your watch sold!</p>
            <p className = "text-btn-sm">You have 1 business day to accept the sale. 
              If you do not accept, it will be automatically rejected.
            </p>
          </div>
          <div className = "">
            <p className = "pl-8 pr-8 mb-4 text-center text-rose-600">{errorMessage}</p>
            <button onClick = {acceptSale} className = "w-full bg-btn text-popup rounded-3xl p-4">Accept sale</button>
            <button onClick = {rejectSale} className = "w-full text-btn rounded-3xl p-4">Reject sale</button>
          </div>
        </div>

        <div className = "productPanel h-full bg-watch rounded-3xl p-10">
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
            <div className = "productDisplay grid grid-cols-5 mt-2 mb-2">
              <div className = "productDetail col-span-4">
                <p className = "mt-2 mb-2 text-black">Rolex DeepSea Sea-Dweller James Cameron 116660</p>
                <p className = "mb-2 text-btn-sm">New / 2014</p>
              </div>
              {
                order["listing"]['images']?(
                  <img src = {order["listing"]['images'][0]['image']['url']} className = "m-2"></img>
                ):null
              }
            </div>
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
            <div className = "flex flex-row place-content-between text-btn-sm mb-2 mt-4">
              <p>Selling Price</p>
              <p className = "text-black">$17945</p>
            </div>
            <div className = "flex flex-row place-content-between text-btn-sm mb-2">
              <p>Level 1 Commission (6.5%)</p>
              <p>$17945</p>
            </div>
            <div className = "flex flex-row place-content-between text-btn-sm mb-2">
              <p>Seller fee</p>
              <p>$17945</p>
            </div>
            <div className = "flex flex-row place-content-between text-btn-sm mb-2">
              <p>Insured Shipping</p>
              <p>Free</p>
            </div>
            <div className = "flex flex-row place-content-between text-auth mb-4">
              <p>Bezel authentication</p>
              <p>Free</p>
            </div>
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
          <div className = "flex flex-row place-content-between text-black font-bold mb-2">
              <p>Earnings</p>
              <p>$22378.25</p>
            </div>
        </div>

        <button onClick = {closeBg} className = "absolute top-3 right-3 h-6 w-6">{close}</button>

      </div>):null
      }
      
      
      {
        isOpen?(
          <button tabIndex = "-1" className = "fixed pin h-full w-full cursor-default bg-black opacity-80 -z-50"></button>
        ):null
      }

    </div>
  );
}

export default App;
