import React from "react";
import Health from "./../component/Health";
import "./../App.css";

function HealthPage() {
  return (
    <Health header="Backend API Connection" path="actuator/health" tag="be" />
  );
}

export default HealthPage;
