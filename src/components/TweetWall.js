import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount = () => {
    this.setState({tweets: this.props.newTweets})
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({tweets: [...nextProps.newTweets, ...this.state.tweets]})
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.tweets.length < nextState.tweets.length) {
      return true
    } else {
      return false
    }
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
