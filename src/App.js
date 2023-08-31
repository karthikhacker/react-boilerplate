import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantsDetails from './components/RestaurantsDetails';
import Cart from './components/Cart';

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/restaurants/:id" component={RestaurantsDetails} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>

    )
}

export default App