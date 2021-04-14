import { Comment } from "./comment";

export interface Ressource {
	href: String;
	accessedAt: String;
	id: String;
	comments: Array<Comment>;
}

export const Ressource = {
	href: String,
	accessedAt: String,
	id: String,
	comments: [Comment],
};

export interface CreateRessource {
	href: String;
}
export const CreateRessource = {
	href: String,
};
