import "./layout.css";

export default function HomeLayout(props) {
  const {
    brand, // name of teh website
    links, // an object with the links
    Toggle, // a rect component with the toggle
    localDetails, // an object with local details of the current location
    Input, // a react component with a controlled input
    Map, // a react component in which map is embed
    HourlyForecast, // a react component for hourly forecast
    DailyForecast, // a react component for daily forecast
    weatherDetails,
  } = props;

  const RenderedLinks = () => <Links links={links} />;
  const { time, date } = localDetails;
  const { temp, condition, description } = weatherDetails;

  return (
    <>
      <div className="home-layout">
        <div className="col h-full">
          <div className="navbar">
            <div className="brand">{brand}</div>
            <div className="links">
              <RenderedLinks />
            </div>
            <div className="toggle">
              <Toggle />
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
              <div className="map">
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
              <div className="map">
                <Map />
              </div>
            </div>

            <div className="links">
              <RenderedLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Links({ links }) {
  return (
    <>
      {Object.keys(links).map((link, key) => (
        <a href={links[link]} key={key}>
          {link}
        </a>
      ))}
    </>
  );
}
