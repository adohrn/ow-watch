import React from 'react';
import fire from '../fire.js';
import YouTube from 'react-youtube';
import Grid from 'react-css-grid'
import moment from 'moment'

const vidStyle = {
  padding: 10
};

const searchContentStyle = {
  marginTop: 20,
  marginLeft: 20,
  display: "flex",
  alignContent:"left"
}

const searchStyle = {
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 12,
  paddingRight: 12,
  width: "100%"
}

const RECENT_DAYS = 3;

export default class YoutubeComponent extends React.Component {
  youtubeRef = fire.database().ref('youtube');

  constructor(props) {
    super(props);
    this.state = { width: 0,
                   youtubeData: [],
                   query: '',
                 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.youtubeRef.on('value', data => {
      this.setState({
        youtubeData: data.val()
      });
    })
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  vidHasTag = (vidTags) => {
    let hasTag = false;
    for (let tag in vidTags) {
      if (vidTags[tag].includes(this.state.query)) {
        hasTag = true;
      }
    }

    return hasTag;
  }

  youtubeUI = () => {
    let recentList = [];
    let previousList = [];

    let colNum = 3;

    if (this.state.width < 768) {
      colNum = 1;
    } else if (this.state.width < 960) {
      colNum = 2;
    }

    const widthCalc = (this.state.width / colNum) - (2*vidStyle.padding)

    // Multiple by 9/16 to keep 16:9 ratio.
    const opts = {
      height: widthCalc * (9/16),
      width: widthCalc
    };

    // Recent date is within 3 days
    let recentDate = moment().endOf('day').subtract(RECENT_DAYS, 'days');

    for (let i in this.state.youtubeData) {
      // If user has searched, check tags
      if (this.state.query !== "" && this.state.query.length > 2) {
        if (!this.vidHasTag(this.state.youtubeData[i].tags)) {
          continue;
        }
      }

      if (recentDate.isBefore(this.state.youtubeData[i].dateAdded)) {
        recentList.unshift(<div style={vidStyle} key={i}>
                      <YouTube videoId={this.state.youtubeData[i].id}
                               opts={opts}/></div>);
      } else {
        previousList.unshift(<div style={vidStyle} key={i}>
                      <YouTube videoId={this.state.youtubeData[i].id}
                               opts={opts}/></div>);
      }
    }

    return(
      <div>
        <div style={searchContentStyle}>
          <form>
           <input
             style={searchStyle}
             placeholder="Search tags"
             ref={input => this.search = input}
             onChange={this.handleInputChange}
           />
         </form>
        </div>
        <div>
          <h2>Recently Added</h2>
          <Grid width={widthCalc} gap={1}>{recentList}</Grid>
        </div>
        <div>
          <h2>Previously Added</h2>
          <Grid width={widthCalc} gap={1}>{previousList}</Grid>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.youtubeUI()
    );
  }
}
