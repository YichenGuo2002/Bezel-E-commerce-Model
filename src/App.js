import './App.css'; // page css
import './style.css'; // tailwind css script

function App() {
  return (
    <div className = "fixed top-0 left-0 w-full h-full flex items-center justify-center font-sans">
      <div className="popUp bg-popup w-3/5 h-4/6 grid grid-cols-2 rounded-3xl p-10">
        
        <div className = "actionPanel h-full flex flex-col place-content-between pl-4 pr-4">
          <div className = "p-8">
            <p className = "text-base mb-2 text-neutral-400">CONGRATS!</p>
            <p className = "text-2xl mb-8 text-btn font-bold">Your watch sold!</p>
            <p className = "text-base text-btn-sm">You have 1 business day to accept the sale. 
              If you do not accept, it will be automatically rejected.
            </p>
          </div>
          <div className = "">
            <button className = "w-full bg-btn text-popup rounded-3xl p-4">Accept sale</button>
            <button className = "w-full text-btn rounded-3xl p-4">Reject sale</button>
          </div>
        </div>

        <div className = "productPanel h-full border bg-watch rounded-3xl p-10">
          <hr className = "border border-neutral-300"/>
          <h3>Selling Price</h3>
          <h3>Level 1 Commission (6.5%)</h3>
          <h3>Seller fee</h3>
          <h3>Insured Shipping</h3>
          <h3>Bezel authentication</h3>
          <hr className = "border border-neutral-300"/>
          <h3>Earnings</h3>
        </div>

      </div>
    </div>
  );
}

export default App;
