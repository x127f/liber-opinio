import {
	Router
} from "express";
import * as database from "quick.db";
import {
	v4 as uuidv4
} from 'uuid';
import {
	CreateComment
} from "../../../models/comment";

import {
	check
} from "lambert-server";

const router = Router();

router.get("/", async (req, res) => {
	const {
		ressourceid
	} = req.params;
	var databaseEntry = await database.get(`resources.${ressourceid}`);
	if (!databaseEntry) res.status(404).send("No ressource found");
	res.send(databaseEntry)

});

router.get("/comments", async (req, res) => {
	const {
		ressourceid
	} = req.params;
	var comments = await database.get(`resources.${ressourceid}.comments`);
	if (!comments) res.status(404).send("No ressource comments found");
	res.send(comments)

});

router.post("/comments", check(CreateComment), async (req, res) => {
	const body = req.body as CreateComment;
	const {
		ressourceid
	} = req.params;

	var commentID = uuidv4();
	const comment = {
		...body,
		author: commentID,
	};
	
	var comments = await database.get(`resources.${ressourceid}.comments`) || [];
	await comments.push(comment);
	
	var databaseEntry = await database.set(`resources.${ressourceid}.comments`, comments);
	res.send("Comment created")
});


export default router;