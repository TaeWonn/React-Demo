import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import routes from './route';

const App = (): JSX.Element => {

  const renderRoutes = (): ReactElement[] => {
    return routes.map(route => (
      <Route key={route.path}
        path={route.path}
        element={<route.component />} />
    ))
  }

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        {renderRoutes()}
      </Routes>
    </Router>

  );
}

export default App;
