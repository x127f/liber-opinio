import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";

import Main from "./components/sites/Main";
import Github from "./components/sites/Github";
import Faq from "./components/sites/Faq";

function App() {
	return (
		<Router>
			<div className="App">
				<CssBaseline></CssBaseline>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Main></Main>
					</Route>
					<Route exact path="/github">
						<Github></Github>
					</Route>
					<Route exact path="/faq">
						<Faq></Faq>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
