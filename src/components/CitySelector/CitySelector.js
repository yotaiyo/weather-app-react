import React from 'react';
import "./CitySelector.css";

const CitySelector = ({inputData, onChangeCityId}) => {
  return(
    <div className="city-selector" >
      <label htmlFor="selector-box">都市を選択してください</label>
      <select id="selector-box" name="selector-box"　onChange={onChangeCityId}>
        {inputData.map(element => <option value={element.id} key={element.id}> {element.city_name} </option>)}
      </select>
    </div>
  )
};

export default CitySelector;
