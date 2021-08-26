import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
