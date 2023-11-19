import React from "react";
import HomeLayout from "../layouts/home.layout";

export default function HomePage() {
  const links = {
    Weather: "/",
    About: "/about",
    GitHub: "https://github.com/SynapseApp/Weather-Web",
  };
  const localDetails = {
    date: "18th Oct, 2023",
    time: "11:18 PM",
  };
  const weatherDetails = {
    temp: "27",
    condition: "clouds",
    description: "broken clouds",
  };

  const DailyForecast = () => <Forecast title="Daily" data={[]} />;
  const HourlyForecast = () => <Forecast title="Hourly" data={[]} />;
  const RenderedWeather = () => <Weather />;

  return (
    <HomeLayout
      brand="WeatherWeb"
      links={links}
      Toggle={Toggle}
      localDetails={localDetails}
      Input={Input}
      Map={Map}
      HourlyForecast={HourlyForecast}
      DailyForecast={DailyForecast}
      weatherDetails={weatherDetails}
    />
  );
}

function Toggle() {
  return <>Toggle</>;
}

function Input() {
  return <input type="text" value="Kolkata" />;
}

function Map() {
  return <></>;
}

function Forecast({ title, data }) {
  return <div className="forecast">{title}</div>;
}
