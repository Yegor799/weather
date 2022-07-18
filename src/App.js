import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
}

export default App;


