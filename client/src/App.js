import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return(
  <Provider store={store}>

    <div className="App">
      <header className="App-header">

        <Router>
          <Route exact path="/" component={Home} />
        </Router>


      </header>
    </div>
  </Provider>
  )

}

export default App;
