import { Server } from "lambert-server";
import db from "./util/db";

db.init().then(async () => {
	async function main() {
		const server = new Server({});
		await server.registerRoutes(__dirname + "/routes/");
		await server.start();
	}

	main().catch(console.error);
});
