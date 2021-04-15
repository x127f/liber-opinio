import { Router } from "express";
import db from "../../util/db";
import { check } from "lambert-server";
import { CreateRessource } from "../../models/ressource";

const router = Router();

router.post("/", check(CreateRessource), (req, res) => {
	res.send({ content: "test" });
});

export default router;
