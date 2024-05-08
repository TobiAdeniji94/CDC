import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

import 'animate.css';
import './App.css';

const imageUrls = [
  "https://www.svgrepo.com/show/354518/visa.svg",
  "https://www.svgrepo.com/show/508701/mastercard-full.svg",
  "https://www.svgrepo.com/show/508416/discover.svg",
  "https://www.svgrepo.com/show/266068/american-express.svg",
]

function App() {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('')
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
  
  const handleNum = (e) => {
    setCreditCardNum(e.target.rawValue);
  }

  const handleType = (type) => {
    setCardType(type);
    // console.log(type);

    if(type === "visa") {
      setCardTypeUrl(imageUrls[0]);
      // console.log("Visa")
    } else if(type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      // console.log("Mastercard")
    } else if(type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      // console.log("Discover")
    } else if(type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      // console.log("Amex")
    }
  }
  
  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  }

  const handleExpMonth = (e) => {
    setExpireMonth(e.target.value);
  }

  const handleExpYear = (e) => {
    setExpireYear(e.target.value);
  }

  return (
       <div className="container">
        <form id="form">
            <div id="card">
                <div className="header">
                    <div className="sticker"></div>
                    <div>
                      <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                    </div>
                </div>
            </div>

            <div className="input-container mt">
                <h4>Enter card number</h4>
                <Cleave
                  delimiter="-"
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: handleType
                  }}
                  onChange={handleNum}
                  placeholder="Please enter your credit card number"
                />
            </div>

            <div className="input-container">
                <h4>Card Holder</h4>
                <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
            </div>

            <div className="input-grp">
                <div className="input-container">
                    <h4>Expiration Year</h4>
                    <select value={expireYear} onChange={handleExpYear}>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className="input-container">
                <h4>Month</h4>
                <select value={expireMonth} onChange={handleExpMonth}>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                </div>
                <div className="input-container">
                    <h4>CVV</h4>
                    <input type="password" placeholder="CVV" required/>
                </div>
            </div>

            <button>submit</button>
        </form>
    </div>
  );
}

export default App;