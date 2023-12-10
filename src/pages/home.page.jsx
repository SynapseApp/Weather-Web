import HomeLayout from "../layouts/home.layout"

import Forecast from "../Components/Forecast"
import Map from "../Components/Map/Map"

export default function HomePage() {
  const links = {
    Weather: "/",
    About: "/about",
    GitHub: "https://github.com/SynapseApp/Weather-Web",
  }
  const localDetails = {
    date: "18th Oct, 2023",
    time: "11:18 PM",
  }
  const weatherDetails = {
    temp: "27",
    condition: "clouds",
    description: "broken clouds",
  }

  const hourlyData = [
    { time: "12:00 AM", temperature: 20 },
    { time: "1:00 AM", temperature: 19 },
    { time: "2:00 AM", temperature: 18 },
    { time: "3:00 AM", temperature: 17 },
    { time: "4:00 AM", temperature: 16 },
    { time: "5:00 AM", temperature: 15 },
    { time: "6:00 AM", temperature: 16 },
    { time: "7:00 AM", temperature: 18 },
    { time: "8:00 AM", temperature: 20 },
    { time: "9:00 AM", temperature: 22 },
  ]

  const dailyData = [
    { date: "Nov 28th", temperature: 22 },
    { date: "Nov 29th", temperature: 21 },
    { date: "Nov 30th", temperature: 20 },
    { date: "Dec 1st", temperature: 19 },
    { date: "Dec 2nd", temperature: 18 },
    { date: "Dec 3rd", temperature: 17 },
    { date: "Dec 4th", temperature: 16 },
    { date: "Dec 5th", temperature: 15 },
    { date: "Dec 6th", temperature: 16 },
    { date: "Dec 7th", temperature: 18 },
  ]

  const DailyForecast = () => <Forecast title="Daily" data={dailyData} />
  const HourlyForecast = () => <Forecast title="Hourly" data={hourlyData} />
  // const RenderedWeather = () => <Weather />;

  return (
    <HomeLayout
      brand="WeatherWeb"
      links={links}
      localDetails={localDetails}
      Map={Map}
      HourlyForecast={HourlyForecast}
      DailyForecast={DailyForecast}
      weatherDetails={weatherDetails}
    />
  )
}
