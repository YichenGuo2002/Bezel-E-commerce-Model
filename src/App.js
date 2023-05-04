import './App.css'; // page css
import './style.css'; // tailwind css script
import React, { useState, useEffect } from "react";

function App(props) {
  //Default Empty Order State
  const orderEmpty = {
    "id": 0,
    "listing": {
    "model": {
        "displayName": "Model",
        "brand": {
            "displayName": "Brand"
        },
        "referenceNumber": "Reference",
       },
    "manufactureYear": "Year",
    "condition": "Condition",
    "images": []
    },
    "salePriceCents": 0,
    "commissionRateBips": 0,
    "sellerFeeCents": 0,
    "payoutAmountCents": 0
  }
  const [isOpen, setIsOpen] = useState(true);
  const [order, setOrder] = useState(orderEmpty);
  const [errorMessage, setErrorMessage] = useState("");
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);

  //Open a gray background for the pop-up
  const openBg = () => {
    setErrorMessage("");
    setIsOpen(true);
  };

  //Close the background
  const closeBg = () => {
    setIsOpen(false);
    setErrorMessage("");
  };

  //Convert Number to money String. 123400 to $1,234.00
  const convertMoney = (cents) =>{
    //There is some problem in handling very large numbers due to IEEE-754 standard representation
    cents = cents.toString();
    if(cents.length >= 3){
      return "$" + Number(cents.slice(0, -2)).toLocaleString() +  "." + cents.slice(-2);
    }
  };

  //Uppercase first letter and lowercase other letters
  const convertCondition = (condition) =>{
    return condition[0].toUpperCase() + condition.slice(1).toLowerCase();
  }

  //Fetch order
  const getOrder = async () =>{
    setErrorMessage("");
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

  //Accept Sale
  const acceptSale = async () =>{
    setErrorMessage("");
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
        setAccept(true);
      }else{
        throw new Error(response.status + " Failed POST.");
      }
    })
    .catch(err =>{
      setErrorMessage("Sorry, failed to accept the sale. Try again later!");
      console.log(err)
    })
  }

  //Reject Sale
  const rejectSale = async () =>{
    setErrorMessage("");
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
        setReject(true);
      }else{
        throw new Error(response.status + " Failed POST.");
      }
    })
    .catch(err =>{
      setErrorMessage("Sorry, failed to reject the sale. Try again later!");
      console.log(err);
    });
  }

  //SVG for the close button
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

  //After opening the page, first fetch the order
  useEffect(() => {
    getOrder();
  }, [])

  return (
  <>

      {
        isOpen?
        (
        <div className = "mainContainer fixed top-0 left-0 w-full h-full font-sans flex items-center justify-center z-50">
          
          <div className="popUp relative bg-popup w-3/5 min-h-4/6 grid grid-cols-2 rounded-3xl p-8 z-50">
        
            <div className = "actionPanel h-full flex flex-col place-content-between pl-4 pr-4">
              <div className = "p-8">
                <p className = "mb-2 text-neutral-400">CONGRATS!</p>
                <p className = "text-2xl mb-8 text-btn font-semibold">Your watch sold!</p>
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
                    <p className = "mt-2 mb-2 text-black">
                    {
                    order["listing"]["model"]["brand"]["displayName"] + " " +
                    order["listing"]["model"]["displayName"] + " " +
                    order["listing"]["model"]["referenceNumber"]
                    }
                    </p>
                    <p className = "mb-2 text-btn-sm">
                      {convertCondition(order["listing"]["condition"])} /  {order["listing"]["manufactureYear"]}</p>
                  </div>
                  {
                    order["listing"]['images'] && order["listing"]['images'].length >= 1 ?(
                      <img src = {order["listing"]['images'][0]['image']['url']} className = "m-2" alt = "product"></img>
                    ):null
                  }
                </div>
              <hr className = "border border-neutral-300 mt-2 mb-2"/>
                <div className = "flex flex-row place-content-between text-btn-sm mb-2 mt-4">
                  <p>Selling Price</p>
                  <p className = "text-black">{convertMoney(order["salePriceCents"])}</p>
                </div>
                <div className = "flex flex-row place-content-between text-btn-sm mb-2">
                  <p>Level 1 Commission (6.5%)</p>
                  <p>{convertMoney(order["commissionRateBips"])}</p>
                </div>
                <div className = "flex flex-row place-content-between text-btn-sm mb-2">
                  <p>Seller fee</p>
                  <p>{convertMoney(order["sellerFeeCents"])}</p>
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
                  <p>{convertMoney(order["payoutAmountCents"])}</p>
                </div>
            </div>

        <button onClick = {closeBg} className = "absolute top-3 right-3 h-6 w-6">{close}</button>

        </div>

        <button disabled tabIndex = "-1" className = "fixed top-0 left-0 pin h-full w-full cursor-default bg-black opacity-80 z-40"></button>

      </div>
        ):null
      }
      

        
    <div className = "productPage fixed top-0 left-0 w-full min-h-full grid grid-cols-2 bg-popup z-0">
        <div className = "flex w-full h-full items-center justify-center rounded-3xl bg-white">
          {
            order["listing"]['images'] && order["listing"]['images'].length >= 1 ?(
              <img src = {order["listing"]['images'][0]['image']['url']} className = "m-2 h-full object-contain object-center" alt = "product"></img>
            ):null
          }
        </div>
        <div className ="pl-4 pr-4 pt-12 pb-12">
          <p className = "mb-2 text-neutral-400"> 
          <a href="https://shop.getbezel.com/explore" className = "underline">SHOP</a> / <a href="/" className = "underline">REF 116660</a> /</p>
          <p className = "text-5xl mb-8 text-btn font-semibold leading-snug">
          {
                    order["listing"]["manufactureYear"] + " " +
                    order["listing"]["model"]["brand"]["displayName"] + " " +
                    order["listing"]["model"]["displayName"] + " " +
                    order["listing"]["model"]["referenceNumber"]
          }
          </p>
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
          <div className = "flex flex-row w-full justify-between items-around pl-12 pr-12 pt-2 pb-2">
            <div>
              <p className = "text-auth mb-2">CONDITION</p>
              <p className = "text-btn">{order["listing"]["condition"]}</p>
            </div>
            <div>
              <p className = "text-auth mb-2">BOX</p>
              <p className = "text-btn">YES</p>
            </div>
            <div>
              <p className = "text-auth mb-2">PAPERS</p>
              <p className = "text-btn">YES</p>
            </div>
            <div>
              <p className = "text-auth mb-2">CASE SIZE</p>
              <p className = "text-btn">40MM</p>
            </div>
          </div>
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
          {
            !accept && !reject?(
              <>
                <button onClick = {openBg} className = "w-full bg-btn text-popup rounded-3xl p-4 mb-2 mt-8">Accept sale</button>
                <button onClick = {openBg} className = "w-full text-btn rounded-3xl p-4 border border-btn" >Reject sale</button>
              </>
            ):(
              <button disabled className = "w-full bg-slate-300 border border-slate-500 text-popup rounded-3xl p-4 mb-2 mt-8">Sale {accept?<>accepted</> : <>rejected</>}</button>
            )
          }
          
          <p className = "mt-4 text-btn text-center">Please login first for <a href="https://shop.getbezel.com/api/auth/login" className = "italic underline">authentication</a></p>
          <p className = "mt-24 text-2xl mb-4 text-btn">The story</p>
          <p className = "text-btn-sm">{order["listing"]["model"]["description"]}</p>
          </div>
    </div>

    </>
  );
}

export default App;
