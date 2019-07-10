import React from 'react';

const LanguageSelector = (props) => {

    console.log("LanguageSelector",props);
    
    const options = props.languages.map((language, index) => {
      return <option value={index} key={index}>{language.name}</option>
    })
  
    return (
      <select name="language-selector" id="language-selector">
        <option disabled selected>Choose a language...</option>
        { options }
      </select>
    )
  };
export default LanguageSelector;
