
import React from "react";
import './../styles/App.css';
import DataFetcher from "./DataFetcher";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Data Fetched from API</h1>
        <DataFetcher></DataFetcher>
    </div>
  )
}

export default App
