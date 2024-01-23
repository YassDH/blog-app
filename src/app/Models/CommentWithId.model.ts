import { Timestamp } from "firebase/firestore";

export interface CommentWithId {
    id : string,
    name : string,
    comment : string,
    approved : boolean,
    postId : string,
    postName : string,
    createdAt : Timestamp
}