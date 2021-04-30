function Button({ text, onPressed, style }) {
	return (
		<button class={`button ${style}`} onClick={onPressed}>
			{text}
		</button>
	);
}

export default Button;
