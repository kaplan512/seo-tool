// import React, {Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
// import Home from './components/routerExampleComponents/Home'
// import Blog from './components/routerExampleComponents/Blog'
// import DynamicRouteComponent from './components/routerExampleComponents/DynamicRouteComponent'
//
//
// class Routes extends Component {
//     render() {
//         return (
//             <Switch>
//                 <Route exact component={Home} path="/"/>
//                 <Route exact component={Blog} path="/blog"/>
//                 <Route exact component={DynamicRouteComponent} path="/users/:userId"/>
//                 <Route exact={true} path="/test" render={() => (
//                     <h1>Welcome to Test</h1>
//                 )}/>
//             </Switch>
//         );
//     }
// }
//
// export default Routes;
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/home/Home";

export default function App() {
    return (
        <Router>
            <div>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to="/">Home</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/about">About</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/users">Users</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// function Home() {
//     return <h2>Home</h2>;
// }

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}