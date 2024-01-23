import { Timestamp } from "firebase/firestore";

export interface BlogPostWithId {
    id: string;
    title : string,
    postLink : string,
    category : {
        categoryId : string,
        category : string
    },
    postImg : string, 
    excerpt : string,
    content : string,
    isFeatured : boolean,
    views : number,
    status : string,
    createdAt : Timestamp
}