import { Server } from "lambert-server";

async function main() {
	const server = new Server({});
	await server.registerRoutes(__dirname + "/routes/");
	await server.start();
}

main().catch(console.error);
