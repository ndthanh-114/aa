import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Switch>
                    <Route path='/' exact component={Profile} />
                    <Route path='/auth' exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
export default App;
