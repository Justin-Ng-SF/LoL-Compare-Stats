import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return(
  <Provider store={store}>

    <div className="App">
      <header className="App-header">
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
        </Router>


      </header>
    </div>
  </Provider>
  )

}

export default App;