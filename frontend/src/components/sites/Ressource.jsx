import NotFound from "./NotFound";
const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;

function Ressource({ match }) {
	const ressource = decodeURIComponent(match.params.ressource_url);
	if (!regex.test(ressource)) {
		return (
			<NotFound text="We can't find a ressource with the given url, try following the common standard of URL's"></NotFound>
		);
	}
	return (
		<div>
			<p>{ressource}</p>
		</div>
	);
}

export default Ressource;
