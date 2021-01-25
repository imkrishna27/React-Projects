import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream ,deleteStream} from "../../actions";

class StreamDelete extends React.Component {

    componentDidMount()
    {
        const id=this.props.match.params.id;
        this.props.fetchStream(id);
    }
  renderActions() {
    const id=this.props.match.params.id;
    return (
      <React.Fragment>
        <Link  to='/' className="ui button">Cancel</Link>
        <button onClick={()=>{this.props.deleteStream(id)}} className="ui negative button">Delete</button>
      </React.Fragment>
    );
  }

  renderContent()
  {
      if(!this.props.stream)
      return 'Are you sure you want to delete this  Stream ?'

      return `Are you sure you want to delete this  Stream : ${this.props.stream.title} ?`
  }

  render() {
    return (

        <Modal
          title="Delete Stream"
          warning={this.renderContent()}
          actions={this.renderActions()}
          dismiss={() => {
            history.push("/");
          }}
        />

    );
  }
}

const mapStateToProps=(state,ownProps)=>
{
    return { stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
