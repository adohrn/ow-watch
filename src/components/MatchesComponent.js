import React from 'react';
import MatchListItem from './MatchListItem';
import fire from '../fire.js';

const ulStyle = {
  listStyleType: "none",
  textAlign: "center",
};

const liStyle = {
  display: "inline-block",
  margin: 20,
  width: "80%"
}

export default class MatchesComponent extends React.Component {
    matchesRef = fire.database().ref('matches');

    componentWillMount() {
      this.setState({
        matches: []
      })

      this.matchesRef.on('value', data => {
        this.setState({
          matches: data.val()
        })
      })
    }

    matchesUI = () => {
      let list = [];

      for(let i in this.state.matches){
          list.push(<li key={i} style={liStyle}><MatchListItem team1={this.state.matches[i].team1} team2={this.state.matches[i].team2}/></li>);
      }
      return(<ul style={ulStyle}> {list} </ul>);
    }

    render() {
      return (
        this.matchesUI()
      );
    }
}
