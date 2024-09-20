import React from "react";
import ReonicLogo from "../assets/reonic-logo.svg";
import { EvVisualization } from "../pages/EvVisualization";
import { Header, Logo, Footer } from "./Application.styles";

const App: React.FC = () => {
  return (
    <>
      <Header>
        <Logo src={ReonicLogo} alt="Reonic Logo" />
        EV Charging Simulator
      </Header>
      <EvVisualization />
      <Footer>Tong Yao 2024 @ Munich</Footer>
    </>
  );
};

export default App;
