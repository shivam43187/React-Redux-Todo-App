import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import store from './services/reducer';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Header />
          <Layout />
        </div>
    </Provider>
  );
}

export default App;
