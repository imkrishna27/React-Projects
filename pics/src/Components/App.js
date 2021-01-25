
import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state={images: []};
  onSearchSubmit=async(term)=> {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID EO2PegdX3U98uBd7AFPdsHKukO4GG-Qm7B4QYLoM2gU",
      },
    });
 
    this.setState({images:response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
