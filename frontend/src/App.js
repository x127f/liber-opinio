import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";
//import Footer from "./components/Footer";

import Main from "./components/sites/Main";
import Ressource from "./components/sites/Ressource";
//import Github from "./components/sites/Github";
//import Faq from "./components/sites/Faq";
import NotFound from "./components/sites/NotFound";
import Colorpalette from "./components/sites/Colorpalette";

function App() {
	return (
		<Router>
			<div className="App">
				<CssBaseline></CssBaseline>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main></Main>
					</Route>
					{/*<Route exact path="/github">
						<Github></Github>
					</Route>
					<Route exact path="/faq">
						<Faq></Faq>
					</Route>*/}
					<Route exact path="/colors">
						<Colorpalette></Colorpalette>
					</Route>
					<Route path="/re/:ressource_url" component={Ressource}></Route>
					<Route path="*" component={NotFound}></Route>
				</Switch>
				{/*<Footer />*/}
			</div>
		</Router>
	);
}

export default App;
