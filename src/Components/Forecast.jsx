import { useRef, useState } from "react";
import "./forecast.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Forecast({ data, title }) {
  const container = useRef();
  const cardSize = getCardSize(container);

  const [textSize, setTextSize] = useState(16);

  useEffect(() => {
    updateTextSize();
  }, [cardSize]);

  function updateTextSize() {
    if (cardSize.height > cardSize.width) setTextSize(cardSize.height / 5);
    else setTextSize(Math.max(cardSize.width / 5, 18));
  }

  return (
    <div className="h-full w-full flex flex-col py-2 px-4 glassmorphic ">
      <h2 className="forecast-title">{title}</h2>
      <div className="forecast-container z-10" ref={container}>
        {data.map((data, index) => (
          <div key={index} className="forecast-card glassmorphic">
            <p
              className="forecast-time font-regular max-lg:max-w-[5ch]"
              style={{ fontSize: textSize * 0.5 + "px" }}
            >
              {data.time || data.date}
            </p>
            <p className="forecast-temp" style={{ fontSize: textSize + "px" }}>
              <span className="font-bold">{data.temperature}</span>°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default Forecast;

function getCardSize(ref) {
  const [size, setSize] = useState({});

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (ref.current) {
      observer.observe(ref.current.children[0]);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current.children[0]);
      }
    };
  }, [ref]);

  return size;
}
