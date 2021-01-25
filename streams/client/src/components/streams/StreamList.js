
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userid === this.props.userid) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button mini grey">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button mini negative">Delete</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i class="play circle outline icon large"></i>
          <div className="content">
            <Link to={`/streams/${stream.id}`}className="header"><b>{stream.title}</b></Link>
            
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right " }}>
          <Link to="/streams/new" className="ui button small black">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui middle aligned selection list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    userid: state.authVal.userid,
    isSignedIn: state.authVal.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
