import React, {useState} from 'react'
import './App.css';

function App() {

  // State to manage the angle value
  const [angle, setAngle] = useState(0);

  // Update the angle value from the text input and ensure it is within the range [0, 360]
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    value = Math.max(0, Math.min(360, value)); // Clamp between 0 and 360
    setAngle(value);
  };

  // Update the angle value from the slider
  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  // Update the angle value from radio buttons
  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };



  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Text Box */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="angleInput">Angle (0 - 360): </label>
        <input
          type="number"
          id="angleInput"
          value={angle}
          min="0"
          max="360"
          onChange={handleInputChange}
        />
      </div>

      {/* Slider */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="range"
          id="angleSlider"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
        />
      </div>

      {/* Radio Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {[0, 45, 60, 90, 180].map((val) => (
          <label key={val} style={{ marginRight: '15px' }}>
            <input
              type="radio"
              name="angleRadio"
              value={val}
              checked={angle === val}
              onChange={handleRadioChange}
            />
            {val}°
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;
