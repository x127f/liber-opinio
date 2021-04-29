function Ressource({ match }) {
	const ressource = match.params.ressource_url;
	return (
		<div>
			<p>{ressource}</p>
		</div>
	);
}

export default Ressource;
