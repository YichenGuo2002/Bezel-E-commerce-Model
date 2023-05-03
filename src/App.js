import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className = "actionPanel">
        <h3>CONGRATS!</h3>
        <h1>Your watch sold!</h1>
        <h5>You have 1 business day to accept the sale. 
          If you do not accept, it will be automatically rejected.
        </h5>
        <button>Accept sale</button>
        <button>Reject sale</button>
      </div>

      <div className = "productPanel">
      <hr/>
      <h3>Selling Price</h3>
      <h3>Level 1 Commission (6.5%)</h3>
      <h3>Seller fee</h3>
      <h3>Insured Shipping</h3>
      <h3>Bezel authentication</h3>
      <hr/>
      <h3>Earnings</h3>
      </div>

    </div>
  );
}

export default App;
