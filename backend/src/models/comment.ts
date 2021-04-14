export interface Comment {
	content: String;
	createdAt: String;
	author: String;
	id: String;
	parentId: String;
}

export const Comment = {
	content: String,
	createdAt: String,
	author: String,
	id: String,
	parentId: String,
};

export interface CreateComment {
	content: String;
	author: String;
}
export const CreateComment = {
	content: String,
	author: String,
};
