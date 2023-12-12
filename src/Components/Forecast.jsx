import "./forecast.css";
import PropTypes from "prop-types";

function Forecast({ data, title }) {
  return (
    <div className="h-full w-full flex flex-col py-2 px-4 glassmorphic ">
      <h2 className="forecast-title">{title}</h2>
      <div className="forecast-container z-10">
        {data.map((data, index) => (
          <div key={index} className="forecast-card glassmorphic">
            <p className="forecast-time font-regular text-md max-sm:text-xs max-lg:max-w-[5ch]">
              {data.time || data.date}
            </p>
            <p className="forecast-temp max-xl:text-5xl xl:text-3xl max-lg:text-2xl lg:text-xl max-md:text-lg md:text-4xl">
              <span className="font-bold">{data.temperature}</span>°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};

export default Forecast;
