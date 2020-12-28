import logo from './logo.svg';
import './App.css';
import Country from './components/country/Country';
import LoadCountryData from './components/LoadCountryData';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <LoadCountryData />
            <Country />
        </div>
      </Provider>
  );
}

export default App;
