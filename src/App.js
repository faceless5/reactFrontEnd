import { Provider } from 'react-redux';
import './App.css';
import MyRoutes from './MyRoutes';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <MyRoutes/>
      </Provider>
    </div>
  );
}

export default App;
