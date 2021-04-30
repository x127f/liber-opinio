function Comment({ author, content, createdAt, replies }) {
	return (
		<div className="comment_container">
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
			<div className="reply_section">
				{replies?.map((x) => (
					<div className="comment reply">
						<div className="comment_header">
							<span className="author">{x?.author}</span>
							<span className="date">{new Date(Number(x?.createdAt)).toUTCString()}</span>
						</div>
						<div className="comment_content">
							{x?.content.split("\n").map((x) => (
								<span>{x}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Comment;
