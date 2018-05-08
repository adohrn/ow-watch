import React from 'react';
import TeamComponent from './TeamComponent'

const matchRowStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

export default class MatchComponent extends React.Component {
  render() {
    return (
      <div style={matchRowStyle}>
        <TeamComponent team={this.props.team1} />
        <h2 style={{width: "10%", align:"center"}}>vs.</h2>
        <TeamComponent team={this.props.team2} />
      </div>
    );
  }
}
