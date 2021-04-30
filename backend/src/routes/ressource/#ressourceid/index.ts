import { Router } from "express";
import * as database from "quick.db";
import { v4 as uuidv4 } from 'uuid';

import { check } from "lambert-server";

const router = Router();

router.get("/", async (req, res) => {
	const { ressourceid } = req.params;
	var databaseEntry = await database.get(`resources.${ressourceid}`);
	if(!databaseEntry) res.status(404).send("No ressource found");
	res.send(databaseEntry)

});

export default router;
