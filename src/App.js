import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slider from "./containers/Slider/Slider";
import Lesson from "./containers/Lessons/Lesson.js";
import Stimuli from "./containers/Stimuli/Stimuli";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";

const App = () => (
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <Switch>
                    <Route exact path="/:user_id/:course_id/:launch_config" component={Lesson} />
                    <Route path="/slider" component={Slider} />
                    <Route path="/" component={Stimuli} />
                </Switch>
            </PersistGate>
        </Router>
    </Provider>
);

export default App;
