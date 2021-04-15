import { Link, Tooltip } from "@material-ui/core";

function Footer() {
	return (
		<div className="Footer">
			<span>
				&copy;
				{"Made by "}
				<Tooltip arrow title="GITHUB XNACLY">
					<Link href="https://github.com/xNaCly" color="primary">
						xnacly
					</Link>
				</Tooltip>
				{" & "}
				<Tooltip arrow title="GITHUB FLAM3RBOY">
					<Link href="https://github.com/Flam3rboy" color="primary">
						Flam3rboy
					</Link>
				</Tooltip>
			</span>
		</div>
	);
}

export default Footer;
