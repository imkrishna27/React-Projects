import React from "react";
import _ from 'lodash';
import { connect } from "react-redux";
import { fetchStream ,editStream } from "../../actions/";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

  componentDidMount()
  {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit=(formData)=>
  {
    this.props.editStream(this.props.match.params.id,formData);
  };
  render() {

    if(!this.props.stream)
    return <div>Loading...</div>

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream,'title','description')}/>
      </div>
    );
  }
}

const mapStateFromProps = (
  state,
  ownProps //ownProps carry component prop
) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateFromProps,{fetchStream,editStream})(StreamEdit);
