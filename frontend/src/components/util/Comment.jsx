function Comment({ author, content, createdAt }) {
	return (
		<div className="comment">
			<div className="comment_header">
				<span className="author">{author}</span>
				<span className="date">{new Date(Number(createdAt)).toUTCString()}</span>
			</div>
			<div className="comment_content">
				{content.split("\n").map((x) => (
					<span>{x}</span>
				))}
			</div>
		</div>
	);
}

export default Comment;
