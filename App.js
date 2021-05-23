import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import *  as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "8e26d167e03a86c64b23feffe56703fe";

export default class extends React.Component {
  
  state ={
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main : {temp},
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main, 
        temp
      });
    };

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude , longitude}
      } = await Location.getCurrentPositionAsync();
      //위도 latitude 경도 longitude
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("cant find you")
    }
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
