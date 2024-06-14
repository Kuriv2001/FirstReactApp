import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showCurrency, setShowCurrency] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/v1/countries")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleCurrency = () => {
    setShowCurrency((prevShowCurrency) => !prevShowCurrency);
  };

  const filteredData = data
    ? data.filter((country) =>
        country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleCurrency}>
          {showCurrency ? "Hide Currency" : "Show Currency"}
        </button>
        <input
          type="text"
          placeholder="Search for your favorite countries"
          value={searchTerm}
          onChange={handleSearch}
        />
        <p>{!data ? "Loading..." : "All Countries:"}</p>
        <ul>
          {filteredData.map((country, index) => (
            <li key={index}>
              {country.name}
              {showCurrency && country.currency ? ` - ${country.currency}` : ""}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
