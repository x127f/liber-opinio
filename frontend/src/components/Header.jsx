import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";

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

	return (
		<AppBar position="sticky">
			<Toolbar>
				<Container className={classes.navbarDisplayFlex}>
					<Link to="/">
						<IconButton edge="start" color="inherit" aria-label="home">
							<Home fontSize="large"></Home>
						</IconButton>
					</Link>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						{navLinks.map(({ title, path }) => (
							<Link to={path} key={title} className={classes.linkText}>
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							</Link>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};
