import React, { Component } from 'react';
import './App.css';
import CitySelector from "./components/CitySelector/CitySelector";
import LocationInfo from "./components/LocationInfo/LocationInfo";
import Table from "./components/Table/Table";
import Description from "./components/Description/Description";
import PinpointLocations from "./components/PinpointLocations/PinpointLocations";
import fetchWeatherInfo from "./components/dataAcquisitionAndOrganize/fetchWeatherInfo";
import tableAcquisition from "./components/dataAcquisitionAndOrganize/dataOrganize";
import INPUT_DATA from './config/data';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = ({
        inputData: INPUT_DATA,
        cityId : null,
        location : {},
        table : {},
        description : {},
        pinpointLocations : {}
      })

  }

  componentDidMount() {
    this.setState({
      cityId: this.state.inputData[0].id
    });

  }

  componentDidUpdate (_, prevState) {
    if (this.state.cityId !== prevState.cityId) {
      fetchWeatherInfo(this.state.cityId)
         .then(weatherInfo => {
           this.setState({
             location : {locationArea: weatherInfo.location.area,
                         locationPrefecture: weatherInfo.location.prefecture,
                         locationCity: weatherInfo.location.city},
             table : tableAcquisition(weatherInfo),
             description : {title: weatherInfo.title,
                            description: weatherInfo.description},

             pinpointLocations : weatherInfo.pinpointLocations
           })
         })
         .catch(error => console.error(error))
       }
     }


  render() {
    const onChangeCityId = (inputEvent) => {
      this.setState({cityId: inputEvent.target.value});
    }

    return (
      <div className="main">
        <CitySelector inputData={this.state.inputData} onChangeCityId={onChangeCityId} />
        <LocationInfo
          locationArea={this.state.location.locationArea}
          locationPrefecture={this.state.location.locationPrefecture}
          locationCity={this.state.location.locationCity}
        />
        {Object.keys(this.state.table).length !== 0 ?
          <Table table={this.state.table} /> :
            <div></div>}
        {Object.keys(this.state.description).length !== 0 ?
          <Description description={this.state.description} /> :
            <div></div>}
        {Object.keys(this.state.pinpointLocations).length !== 0　?
          <PinpointLocations pinpointLocations = {this.state.pinpointLocations}/> :
            <div></div>}
      </div>
    );
  }
}

export default App;
