import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import App from './components/App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </div>
    </Router>,
    document.getElementById('root')
);