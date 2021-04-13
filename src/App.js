import React, { useState, useEffect } from "react";
import Select from "react-select";
import data from './data.json';

function App() {
  const [country_state, setCountry_state] = useState(null);
  const [lga, setLga] = useState(null);
  const [lgaList, setLgaList] = useState([]);

  const handleStateChange = (obj) => {
    setCountry_state(obj);
    setLgaList(obj.local_government_areas);
    setLga(null);
  };
  
  const handleLgaChange = (obj) => {
    setLga(obj);
  };


  return (
    <div className="App">
      <h3>Nigeria States and local governments</h3>
      <div style={{ width: 400, marginBottom: 20 }}>
        <b>State</b>
        <Select
          placeholder="Select State"
          value={country_state}
          options={data}
          onChange={handleStateChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.local_government_areas}
        />
        <br />
        <b>LGA</b>
        <Select
          placeholder="Select LGA"
          value={lga}
          options={lgaList}
          onChange={handleLgaChange}
          getOptionLabel={x => x.name}
          getOptionValue={x => x.code}
        />
      </div>
    </div>
  );
}

export default App;
