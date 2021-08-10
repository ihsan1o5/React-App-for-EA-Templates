import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slider from "./containers/Slider/Slider";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/:user_id/:course_id/:launch_config" component={Slider} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
