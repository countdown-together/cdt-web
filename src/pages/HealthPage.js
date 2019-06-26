import React from "react";
import Health from "./../component/Health";
import "./../App.css";

function HealthPage() {
  return (
    <Health
      endpoint={process.env.REACT_APP_API_ENDPOINT}
      header="Backend API Connection"
      path="actuator/health"
      tag="be"
    />
  );
}

export default HealthPage;
