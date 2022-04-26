
import "./App.css";
import { useState, useEffect } from 'react';

function App() {

  const [stocks, setStock] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/stocks`)
      .then(response => response.json())
      .then(data => {

        setStock(data.map(d => {
          return d.result
        }))

      })

  }, []);

  const reduceName = (name) => { return name && name.length > 17 ? `${name.substring(0, 17)}...` : name };

  return (
    <div className="App">
      <div className="container">
        <div>
          {
            stocks.map(data =>
              <div className="tableContainer" >
                <div className="image">
                  <img src={data.logo} alt="Logo" className="icon" />
                </div>

                <div className="rateContainer">
                  <div className="tableTitle">{data.symbol}</div>
                  <div className="tableColumn">{reduceName(data.companyName)}</div>
                </div>

                <div className="rateContainer">
                  <div className="stockPrice">${data.previousClose}</div>
                  <div className="progressContainer">
                    <div className="dollarValue">{data.change}</div>
                    <div className="percentageChange">{data.changePercent}%</div>
                  </div>
                </div>

              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
