import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './pages/SignIn'
import {SIGH_UP_SCHEMA} from './utils/validationShemas';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/sign-up' component={} /> */}
        <Route path='/' component={SignInPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
