import { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./Context/Weather";
import "./App.css";

function App() {
  const weather = useWeather();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
    // Update date every second
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []); 

  const handleRefresh = () => {
    weather.fetchCurrentUserLocationData();
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <p>{currentDate.toLocaleString()}</p>
      <Input
        placeholder="Enter city"
        value={weather.searchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
      <Button onClick={weather.fetchData} value="Search" />
      {weather.data && (
        <Card data={weather.data} />
      )}
      <Button onClick={handleRefresh} value="Refresh" />
    </div>
  );
}

export default App;
