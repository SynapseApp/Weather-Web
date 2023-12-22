import "./layout.css"
import PropTypes from "prop-types"
import { createContext, useState } from "react"
import Toggler from "../Components/Toggler"
import Input from "../Components/SearchInput"

export const ThemeContext = createContext(null)

export default function HomeLayout(props) {
  const {
    brand, // name of teh website
    links, // an object with the links
    localDetails, // an object with local details of the current location
    Map, // a react component in which map is embed
    HourlyForecast, // a react component for hourly forecast
    DailyForecast, // a react component for daily forecast
    weatherDetails,
  } = props
  const [activeLink, setActiveLink] = useState(Object.keys(links)[0])

  const RenderedLinks = () => (
    <>
      {Object.keys(links).map((link, key) => (
        <a
          href={links[link]}
          key={key}
          className={activeLink === link ? "active" : ""}
          onMouseEnter={() => handleMouseEnter(link)}
          onMouseLeave={handleMouseLeave}
        >
          {link}
        </a>
      ))}
    </>
  )

  const handleMouseLeave = () => {
    setActiveLink(null)
  }

  const handleMouseEnter = (link) => {
    setActiveLink(link)
  }

  const { time, date } = localDetails
  const { temp, condition, description } = weatherDetails

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <div className="home-layout">
            <div className="col h-full">
              <div className="navbar">
                <div className="brand">{brand}</div>
                <div className="links">
                  <RenderedLinks />
                </div>
                <div className="toggle">
                  <Toggler />
                </div>
              </div>
              {/* Desktop Layout */}
              <div className="desktop-layout row">
                <div className="left-section">
                  <div className="local-details">
                    <div className="time">
                      {time.substring(0, time.length - 2)}{" "}
                      <span>{time.substring(time.length - 3)}</span>
                    </div>
                    <div className="date">
                      {date.substring(0, 2)}
                      <sup>{date.substring(2, 4)}</sup> {date.substring(4)}
                    </div>
                    <Input />
                  </div>
                  <div className="map glassmorphic">
                    <Map />
                  </div>
                </div>
                <div className="right-section">
                  <div className="hourly forecast">
                    <HourlyForecast />
                  </div>
                  <div className="daily forecast">
                    <DailyForecast />
                  </div>
                  <div className="weather">
                    <div className="head">
                      <div className="temp">
                        {temp}
                        <span>°C</span>
                      </div>
                      <div className="condition">{condition}</div>
                    </div>
                    <div className="description">{description}</div>
                  </div>
                </div>
              </div>
              {/* Mobile Layout */}
              <div className="mobile-layout">
                <div className="container">
                  <Input />
                  <div className="weather">
                    <div className="temp">
                      {temp}
                      <span>°C</span>
                    </div>
                    <div className="condition">{condition}</div>
                    <div className="description">{description}</div>
                    <div className="local-details">
                      <div className="date">
                        {date.substring(0, 2)}
                        <sup>{date.substring(2, 4)}</sup> {date.substring(4)}
                      </div>
                      •
                      <div className="time">
                        {time.substring(0, time.length - 2)}{" "}
                        <span>{time.substring(time.length - 3)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hourly forecast">
                    <HourlyForecast />
                  </div>
                  <div className="daily forecast">
                    <DailyForecast />
                  </div>
                  <div className="map glassmorphic">
                    <Map location="kabul" />
                  </div>
                </div>
                <div className="links">
                  <RenderedLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

HomeLayout.propTypes = {
  brand: PropTypes.string.isRequired, // Ensure brand is a required string
  links: PropTypes.object.isRequired, // Ensure links is a required object
  // Toggle: PropTypes.elementType.isRequired, // Ensure Toggle is a required React element
  localDetails: PropTypes.object.isRequired, // Ensure localDetails is a required object
  Map: PropTypes.elementType.isRequired, // Ensure Map is a required React element
  HourlyForecast: PropTypes.elementType.isRequired, // Ensure HourlyForecast is a required React element
  DailyForecast: PropTypes.elementType.isRequired, // Ensure DailyForecast is a required React element
  weatherDetails: PropTypes.object.isRequired, // Ensure weatherDetails is a required object
}
