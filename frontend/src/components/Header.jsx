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
} from "@material-ui/core";
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
					<Tooltip title="HOME" arrow>
						<Link to="/">
							<IconButton edge="start" color="inherit" aria-label="home">
								<Home fontSize="large"></Home>
							</IconButton>
						</Link>
					</Tooltip>
					<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
						{navLinks.map(({ title, path }) => (
							<Tooltip title={title.toUpperCase()} key={title} arrow>
								<Link to={path} className={classes.linkText}>
									<ListItem button>
										<ListItemText primary={title} />
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
