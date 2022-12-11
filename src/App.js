import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import Categories from './components/Categories';

import AppRoutes from "./AppRoutes";

// Styles
import './App.css';

const AppContent = () => (
  <main className="main-container">
    <div className="aside">
      <Categories />
    </div>
    <div className="content">
      <h3>Images by category! </h3>
      <AppRoutes />
    </div>
  </main>
);

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <div className="App">
      <AppContent />
    </div>
  </Router>
);

export default App;
