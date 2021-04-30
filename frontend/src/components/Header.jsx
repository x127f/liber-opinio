import {
	AppBar,
	Toolbar,
	IconButton,
	List,
	//	ListItem,
	//	ListItemText,
	makeStyles,
	Container,
	Tooltip,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

/*const navLinks = [
	{ title: `github`, path: `/github` },
	{ title: `faq`, path: `/faq` },
];*/

const useStyles = makeStyles({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
		"align-items": `center`,
	},
	navDisplayFlex: {
		display: `flex`,
		"align-items": `center`,
		justifyContent: `space-between`,
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`,
	},
});

export const Header = () => {
	const classes = useStyles();
	const history = useHistory();
	const [search, updateSearch] = useState("");

	const Submit = (href) => {
		href = encodeURIComponent(href);
		history.push(`/re/${href}`);
		console.log(href);
	};

	return (
		<AppBar className="navbar" position="sticky">
			<Toolbar>
				<Container className={classes.navbarDisplayFlex}>
					<Tooltip title="HOME" arrow>
						<Link to="/">
							<IconButton edge="start" aria-label="home">
								<Home className="home_button" fontSize="large"></Home>
							</IconButton>
						</Link>
					</Tooltip>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								Submit(search);
							}}>
							<input
								type="text"
								className="search_field"
								placeholder="Search"
								onChange={(e) => updateSearch(e.target.value)}
							/>
						</form>
						{/*navLinks.map(({ title, path }) => (
							<Tooltip title={title.toUpperCase()} key={title} arrow>
								<Link to={path} className={classes.linkText}>
									<ListItem button>
										<ListItemText className={classes.linkText} primary={title} />
									</ListItem>
								</Link>
							</Tooltip>
						))*/}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};
