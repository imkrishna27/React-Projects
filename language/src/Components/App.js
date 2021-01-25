import React  from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component
{
    state={language:'English',flag:false};

    onLanguageChange=language=>
    {
        this.setState({language});
    }
    render()
    {
        
        return (    
            
        <div className="ui container">
            <div>
                Select a Language:
                <i className="flag us" onClick={()=> this.onLanguageChange('English')} />
                <i className="flag india" onClick={()=> this.onLanguageChange('Hindi')} />
            </div>
            <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
            </LanguageContext.Provider>

            {this.state.language}
        </div>
        )
    }
}

export default App;