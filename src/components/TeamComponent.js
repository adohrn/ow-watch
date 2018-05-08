import React from 'react';
import dragonsLogo from '../images/dragons.svg';
import mayhemLogo from '../images/mayhem.svg';
import spitfireLogo from '../images/spitfire.svg';
import excelsiorLogo from '../images/excelsior.svg';
import shockLogo from '../images/shock.svg';
import valilantLogo from '../images/valiant.svg';
import uprisingLogo from '../images/uprising.svg';
import gladiatorLogo from '../images/gladiator.svg';
import fusionLogo from '../images/fusion.svg';
import outlawLogo from '../images/outlaw.svg';
import fuelLogo from '../images/fuel.svg';
import dynastyLogo from '../images/dynasty.svg';

const logoStyle = {
  height: 80
}

const teamPrimaryColors = {  "Dragons": "#D22730",
                             "Mayhem": "#FEDC01",
                             "Spitfire": "#59CAE8",
                             "Excelsior": "#181C39",
                             "Shock": "#60636A",
                             "Valiant": "#2A7230",
                             "Uprising": "#174B97",
                             "Gladiators": "#381360",
                             "Fusion": "#F89D2A",
                             "Outlaws": "#96CA4E",
                             "Fuel": "#0B233F",
                             "Dynasty": "#000000",
};
const teamSecondaryColors = {  "Dragons": "#000000",
                               "Mayhem": "#AF282F",
                               "Spitfire": "#1B2B3A",
                               "Excelsior": "#2B58E9",
                               "Shock": "#FC4C01",
                               "Valiant": "#000000",
                               "Uprising": "#000000",
                               "Gladiators": "#FFFFFF",
                               "Fusion": "#000000",
                               "Outlaws": "#000000",
                               "Fuel": "#0071CD",
                               "Dynasty": "#FFFFFF",
};

var primaryColor;
var secondaryColor;
var logo;

export default class TeamComponent extends React.Component {

  setTeamData = (team) => {
    if (team.includes("Dragons")) {
      logo = dragonsLogo;
      primaryColor = teamPrimaryColors.Dragons;
      secondaryColor = teamSecondaryColors.Dragons;
    } else if (team.includes("Mayhem")) {
      logo = mayhemLogo;
      primaryColor = teamPrimaryColors.Mayhem;
      secondaryColor = teamSecondaryColors.Mayhem;
    } else if (team.includes("Spitfire")) {
      logo = spitfireLogo;
      primaryColor = teamPrimaryColors.Spitfire;
      secondaryColor = teamSecondaryColors.Spitfire;
    } else if (team.includes("Excelsior")) {
      logo = excelsiorLogo;
      primaryColor = teamPrimaryColors.Excelsior;
      secondaryColor = teamSecondaryColors.Excelsior;
    } else if (team.includes("Shock")) {
      logo = shockLogo;
      primaryColor = teamPrimaryColors.Shock;
      secondaryColor = teamSecondaryColors.Shock;
    } else if (team.includes("Valiant")) {
      logo = valilantLogo;
      primaryColor = teamPrimaryColors.Valiant;
      secondaryColor = teamSecondaryColors.Valiant;
    } else if (team.includes("Uprising")) {
      logo = uprisingLogo;
      primaryColor = teamPrimaryColors.Uprising;
      secondaryColor = teamSecondaryColors.Uprising;
    } else if (team.includes("Gladiators")) {
      logo = gladiatorLogo;
      primaryColor = teamPrimaryColors.Gladiators;
      secondaryColor = teamSecondaryColors.Gladiators;
    } else if (team.includes("Fusion")) {
      logo = fusionLogo;
      primaryColor = teamPrimaryColors.Fusion;
      secondaryColor = teamSecondaryColors.Fusion;
    } else if (team.includes("Outlaws")) {
      logo = outlawLogo;
      primaryColor = teamPrimaryColors.Outlaws;
      secondaryColor = teamSecondaryColors.Outlaws;
    } else if (team.includes("Fuel")) {
      logo = fuelLogo;
      primaryColor = teamPrimaryColors.Fuel;
      secondaryColor = teamSecondaryColors.Fuel;
    } else if (team.includes("Dynasty")) {
      logo = dynastyLogo;
      primaryColor = teamPrimaryColors.Dynasty;
      secondaryColor = teamSecondaryColors.Dynasty;
    }
  }

  render() {
    this.setTeamData(this.props.team);

    return (
      <div style={{padding: 20, backgroundColor: primaryColor, width:"40%"}}>
        <img src={logo} style={logoStyle} alt="logo" />
        <h2 style={{color: secondaryColor}}>{this.props.team}</h2>
      </div>
    );
  }
}
