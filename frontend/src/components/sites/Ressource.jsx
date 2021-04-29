function Ressource({ match }) {
	const ressource = decodeURIComponent(match.params.ressource_url);
	return (
		<div>
			<p>{ressource}</p>
		</div>
	);
}

export default Ressource;
