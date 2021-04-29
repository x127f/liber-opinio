const NotFound = ({
	text = "The requested ressource wasn't found on our servers. If you believe this was an error, contact the admins via github/E-Mail.",
}) => {
	return (
		<div className="not_found">
			404 <span className="smaller_text">{text}</span>
		</div>
	);
};

export default NotFound;
