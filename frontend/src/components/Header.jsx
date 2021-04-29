import {
	AppBar,
	Toolbar,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Container,
	Tooltip,
	TextField,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const navLinks = [
	{ title: `github`, path: `/github` },
	{ title: `faq`, path: `/faq` },
];

const useStyles = makeStyles({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
	},
	navDisplayFlex: {
		display: `flex`,
		"align-items": `center`,
		justifyContent: `space-between`,
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `grey`,
	},
});

export const Header = () => {
	const classes = useStyles();
	const history = useHistory();
	const [search, updateSearch] = useState("");

	const Submit = (href) => {
		history.push(`/re/${href}`);
	};

	return (
		<AppBar className="navbar" position="sticky">
			<Toolbar>
				<Container className={classes.navbarDisplayFlex}>
					<Tooltip title="HOME" arrow>
						<Link to="/">
							<IconButton edge="start" aria-label="home">
								<Home fontSize="large"></Home>
							</IconButton>
						</Link>
					</Tooltip>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						<form
							id="field-container"
							noValidate
							autoComplete="off"
							onSubmit={(e) => {
								e.preventDefault();
								Submit(search);
							}}>
							<TextField
								id="filled-basic"
								label="Search"
								variant="filled"
								onChange={(e) => updateSearch(e.target.value)}
							/>
						</form>
						{navLinks.map(({ title, path }) => (
							<Tooltip title={title.toUpperCase()} key={title} arrow>
								<Link to={path} className={classes.linkText}>
									<ListItem button>
										<ListItemText className={classes.linkText} primary={title} />
									</ListItem>
								</Link>
							</Tooltip>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};
