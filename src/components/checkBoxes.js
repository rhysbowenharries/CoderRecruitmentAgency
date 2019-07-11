import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import { freemem } from "os"

const Checkbox = (props) => {

  const languages = [
    {
      name: "Ruby",
      _self: "http://localhost:8080/languages/1"
    },
    {
      name: "Java",
      _self: "http://localhost:8080/languages/2"
    }
  ];

  const [selectedLanguages, setSelectedLanguages] = useState({});

  function handleCheckboxChange(e) {
    const nextLanguages = { ...selectedLanguages };
    nextLanguages[e.currentTarget.name] = e.currentTarget.checked;
    setSelectedLanguages(nextLanguages);
    props.handleLanguageChange(getSelectedLanguages().map(language => language))
  }

  function getSelectedLanguages() {
    return Object.keys(selectedLanguages).filter(
      (key, _) => selectedLanguages[key]
    );
  }

  function makePsForEachSelectedLangauge() {
    return getSelectedLanguages().map(language => <p>{language}</p>);
  }

  const languageCheckBoxes = languages.map((language, index) => {
    return (
      <Fragment>
        <input
        key={index}
          type="checkbox"
          onChange={handleCheckboxChange}
          id={language._self}
          name={language._self}
          value={language._self}
        />
        <label for={language._self}>{language.name}</label>
      </Fragment>
    );
  });

  return (
    <Fragment>
      {languageCheckBoxes}
      {makePsForEachSelectedLangauge()}
    </Fragment>
  );
}


export default Checkbox
