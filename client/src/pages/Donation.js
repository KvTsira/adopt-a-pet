import react, {useState} from 'react'
// import './Donation.css';
import StripeCheckout from "react-stripe-checkout"

function Donation() {

  const [product, setProduct] = useState({
    name: "Donation",
    price: 10,
    productBy: "Adopt-a-Pet"
  });

  const makeDonation = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch('http://localhost:8282/payment', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log ("RESPONSE ", response)
      const {status} = response;
      console.log("STATUS ", status)
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
    {/* <div className="Donation"></div> */}
      <header>
      {/* <header className="Donation-header"> */}
        {/* <img src={logo} className="Donation-logo" alt="logo" /> */}

        <a
          // className="Donation-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout 
          stripeKey={process.env.REACT_APP_KEY} 
          token={makeDonation}
          name="Donate"
          amount={product.price * 100}
          >
          {/* <button className='btn-large blue'> Donate Now ${product.price} </button> */}
          <button> Donate Now ${product.price} </button>

        </StripeCheckout>
        
      </header>
    </div>
  );
}

export default Donation;