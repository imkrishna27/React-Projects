import React from "react";

class SearchBar extends React.Component {
  state = { data: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.data);
  };
  render() {
    return (
      <div className="saarch-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label><h1>VideoNET :-)</h1></label>
            <input
              type="text"    
              value={this.state.data}
              onChange={(e) => {
                this.setState({ data: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
