import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
// import Float from './components/Float'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
					<Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
