function Ressource({ match }) {
	const ressource = decodeURIComponent(match.params.ressource_url);
	if (
		!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g.test(
			ressource
		)
	) {
	}
	return (
		<div>
			<p>{ressource}</p>
		</div>
	);
}

export default Ressource;
