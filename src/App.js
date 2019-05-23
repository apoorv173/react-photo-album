import React, { Component, Suspense, lazy } from 'react';
import { Provider } from "react-redux";
import {Route, Router, Switch, Redirect } from "react-router-dom";
import store, {history} from "./configureStore";
import { PAGE_COUNT } from './actions/constants';
import './App.scss';
import { Header, Loader } from './components/';

const AlbumPageContainer = lazy(() => import("./modules/album-page-container"));
const PhotoPageContainer = lazy(() => import("./modules/photo-page-container"));


class App extends Component {
	
	componentDidMount() {
		//appending the default number of rows to appear as query param, for back navigation based on size as well.
		history.push({
			search: `?size=${PAGE_COUNT}&page=1`
		});
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Suspense fallback={<Loader />}>
						<Header />
						<div className="container-fluid">
							<Switch>
								<Route path="/albums" exact component={AlbumPageContainer}/>
								<Route path="/albums/:albumId/photos/" exact component={PhotoPageContainer}/>
								<Redirect from="/" to="/albums" />
							</Switch>
						</div>	
					</Suspense>
				</Router>
			</Provider>
		);
	}
    
};
export default App;
