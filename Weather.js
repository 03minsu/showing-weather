import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "집에서 코딩이나 하세요"
      },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "#now playing 오반- 비가 오잖아"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snowing",
        subtitle: "Do you want to build a snowman?"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subtitle: "맑음 (데이트 하기 좋음)"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "매우 흐림"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "시야 확보 주의"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "황사 주의"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "외출 자제"
    }
};

export default function Weather({temp,condition}) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"  />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
        <View style={styles.textcontainer} >
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>
                {weatherOptions[condition].subtitle}
            </Text>
            </View>
        </LinearGradient>
    );
}
 
Weather.proptype = {
    temp:PropTypes.number.isRequired,
    temp:PropTypes.string.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
})