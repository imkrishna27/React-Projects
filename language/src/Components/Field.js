import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component
{
    static contextType=LanguageContext;
    render()
    {
        const name=this.context==='English'?'Submit':'नाम';
        return (
            <div className="ui field">
                <label>{name}</label>
                <input />
            </div>
        );
    }
}

export default Field;