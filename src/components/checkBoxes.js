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

  const handleCheckboxChange = (e) => {
    const nextLanguages = { ...selectedLanguages };
    nextLanguages[e.currentTarget.name] = e.currentTarget.checked;
    setSelectedLanguages(nextLanguages);
  }

  const getSelectedLanguages = () => {
    return Object.keys(selectedLanguages).filter(
      (key, _) => selectedLanguages[key]
    );
  }

  const makePsForEachSelectedLangauge = () => {
    return getSelectedLanguages().map(language => <p>{language}</p>);
  }

  const languageCheckBoxes = languages.map(language => {
    return (
      <Fragment>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          id={language._self}
          name={language._self}
        />
        <label for={language._self}>{language.name}</label>
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
