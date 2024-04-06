import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import services from "./services.json";

const TotalCount = () => {
  const [servicesName, setServicesName] = useState("");
  const [suggestions, setSuggestions] = useState(services);

  const onChange = (_, { newValue }) => {
    setServicesName(newValue);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength === 0) {      
      return [];
    } else {
      return suggestions.filter((service) =>
        service.name.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    value: servicesName,
    onChange: onChange,
    placeholder: "Type",
    style: { width: '1000px' } 
  };

  const getSectionSuggestions = (section) => {
    return section.suggestions;
  };

  return (
    <div>
      <Autosuggest   
        multiSection={false} 
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
        inputProps={inputProps}
      />
    </div>
  );
};

export default TotalCount;
