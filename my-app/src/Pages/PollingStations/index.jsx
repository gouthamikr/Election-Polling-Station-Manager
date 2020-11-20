import React from "react";
import City from "../../Components/City";
import CityType from "../../Components/CityType";
import District from "../../Components/District";
import Population from "../../Components/Population";
export default function PollingStations() {
  return (
    <div>
      <div>Polling Page</div>
      <City />
      <District />
      <br />
      <CityType />
      <Population />
    </div>
  );
}
