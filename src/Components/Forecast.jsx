import './forecast.css';
import PropTypes from 'prop-types';

function Forecast({ data, title }) {
  return (
    <div className="h-full w-full flex flex-col py-2 px-4 glassmorphic z-0">
      <h2 className="forecast-title">{title}</h2>
      <div className="forecast-container z-10">
        {data.map((data, index) => (
          <div key={index} className="forecast-card glassmorphic">
            <p className="forecast-time font-regular text-md">{data.time || data.date}</p>
            <p className="forecast-temp text-5xl">
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
