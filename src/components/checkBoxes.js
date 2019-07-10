import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import { freemem } from "os"

const Checkbox = (props) => {

  const availableLanguages = [
    {
      name: "Ruby",
      _self: "http://localhost:8080/languages/1"
    },
    {
      name: "Java",
      _self: "http://localhost:8080/languages/2"
    }
  ];

  const [languages, setSelectedLanguages] = useState({});

  function handleCheckboxChange(e) {
    const nextLanguages = { ...languages };
    nextLanguages[e.currentTarget.name] = e.currentTarget.checked;
    setSelectedLanguages(nextLanguages);
  }

  function getSelectedLanguages() {
    return Object.keys(languages).filter(
      (key, _) => languages[key]
    );
  }

  // function makePsForEachSelectedLangauge() {
  //   return getSelectedLanguages().map(language => <p>{language}</p>);
  // }

  const languageCheckBoxes = availableLanguages.map((language, index) => {
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
        <label htmlFor={language._self}>{language.name}</label>
      </Fragment>
    );
  });

  return (
    <Fragment>
      {languageCheckBoxes}
    </Fragment>
  );
}


export default Checkbox
