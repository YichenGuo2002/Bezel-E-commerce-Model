import './App.css'; // page css
import './style.css'; // tailwind css script

function App() {

  let product = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
      preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M344 920 l-150 -5 -57 -49 -57 -48 0 -369 0 -369 420 0 420 0 0 369
      0 369 -61 51 -61 51 -138 0 c-76 0 -144 1 -152 3 -7 2 -81 0 -164 -3z m136
      -70 l0 -30 -157 0 -157 0 34 30 c35 29 36 29 158 30 l122 0 0 -30z m320 0 l34
      -30 -157 0 -157 0 0 30 0 30 123 0 c121 -1 122 -1 157 -30z m80 -400 l0 -330
      -380 0 -380 0 0 330 0 330 380 0 380 0 0 -330z"/>
      <path d="M392 688 c-7 -7 -12 -24 -12 -38 0 -14 5 -31 12 -38 16 -16 200 -16
      216 0 15 15 15 61 0 76 -16 16 -200 16 -216 0z"/>
      </g>
    </svg>
  )

  let close = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
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

  return (
    <div className = "fixed top-0 left-0 w-full h-full flex items-center justify-center font-sans">
      <div className="popUp bg-popup w-3/5 min-h-4/6 grid grid-cols-2 rounded-3xl p-8">
        
        <div className = "actionPanel h-full flex flex-col place-content-between pl-4 pr-4">
          <div className = "p-8">
            <p className = "mb-2 text-neutral-400">CONGRATS!</p>
            <p className = "text-2xl mb-8 text-btn font-bold">Your watch sold!</p>
            <p className = "text-btn-sm">You have 1 business day to accept the sale. 
              If you do not accept, it will be automatically rejected.
            </p>
          </div>
          <div className = "">
            <button className = "w-full bg-btn text-popup rounded-3xl p-4">Accept sale</button>
            <button className = "w-full text-btn rounded-3xl p-4">Reject sale</button>
          </div>
        </div>

        <div className = "productPanel h-full bg-watch rounded-3xl p-10">
          <hr className = "border border-neutral-300 mt-2 mb-2"/>
            <div className = "productDisplay grid grid-cols-5 mt-2 mb-2">
              <div className = "productDetail col-span-4">
                <p className = "mt-2 mb-2 text-black">Rolex DeepSea Sea-Dweller James Cameron 116660</p>
                <p className = "mb-2 text-btn-sm">New / 2014</p>
              </div>
              <img 
              src = "https://getbezel.mo.cloudinary.net/sandbox/1583bb64-0df2-4a69-a10d-119e464ab6fe.png"
              className = "m-2"></img>
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

      </div>
    </div>
  );
}

export default App;
