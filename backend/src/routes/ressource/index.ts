import { Router } from "express";
import * as database from "quick.db";
import { v4 as uuidv4 } from 'uuid';

import { check } from "lambert-server";
import { CreateRessource } from "../../models/ressource";

const router = Router();

router.post("/", check(CreateRessource), async (req, res) => {
	const body = req.body as CreateRessource;
	var resourceID = uuidv4();
	const resource = {
		...body,
		id: resourceID,
	};
	var databaseEntry = await database.set(`resources.${resourceID}`, resource);
	res.send(databaseEntry)

});

export default router;
