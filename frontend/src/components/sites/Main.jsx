import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function Main() {
	return (
		<Container maxWidth="md" className="main_container">
			<div className="secondary_container">
				<span className="title">About</span>
				<span className="content">
					<p>
						Liber-Opinio is a platform to anonymously and without being censored discuss the content of any
						website
					</p>
				</span>
				<div className="link_container">
					<Link class="button" to={`/re/${encodeURIComponent("https://github.com/x127f/liber-opinio")}`}>
						Try it
					</Link>
					<a class="button" href="https://github.com/x127f/liber-opinio">
						Github
					</a>
				</div>
			</div>
			<div className="secondary_container">
				<span className="title">Philosphy</span>
				<span className="content">
					<p>
						We, the devs started this project to allow the broad public to share their opinions on
						ressources outside of the multi billion dollar censoring companies ecosystems.
					</p>
					<p>
						We, the devs share the idea of{" "}
						<a className="a" href="https://www.un.org/en/about-us/universal-declaration-of-human-rights">
							Human Rights (Article 19)
						</a>
					</p>
					<p className="quote">
						Everyone has the right to freedom of opinion and expression; this right includes freedom to hold
						opinions without interference and to seek, receive and impart information and ideas through any
						media and regardless of frontiers.
					</p>
					<p>
						We, the devs will not remove any content to aid the previously mentioned article of the
						declaration of human rights.
					</p>
					<p>
						We, the devs intended this project to aid the platform independed exchange of opinions,
						therefore we allow users to comment on every ressource they intend to comment on.
					</p>
					<p>
						We, the devs do not fingerprint, identify or store any data about the users. (Not clientside nor
						serverside)
					</p>
					<p>
						We, the devs belive in free software and therefore are using the{" "}
						<code className="code">GNU General Public License v3.0</code>.
					</p>
					<a className="a" href="https://github.com/x127f/liber-opinio">
						Source code
					</a>
				</span>
			</div>
			<div className="secondary_container">
				<span className="title">Name</span>
				<span className="content">
					<p>
						liber-opinio <code>(lat.)</code>
					</p>
					<p className="quote">free opinion</p>
				</span>
			</div>
		</Container>
	);
}

export default Main;
